class LeagueService {
  constructor() {
    this.matches = [];
    this.leaderboard = [];
  }

  setMatches(matches) {
    matches.forEach((match) => {
      const newDate = new Date(match.matchDate);
      const dateFormatter = `${newDate.getDate()}.${
        newDate.getMonth() + 1
      }.${newDate.getFullYear()} - ${newDate.getHours()}:${newDate.getMinutes()}`;
      this.matches.push({
        matchDate: dateFormatter.split("-"),
        stadium: match.stadium,
        homeTeam: match.homeTeam,
        awayTeam: match.awayTeam,
        matchPlayed: match.matchPlayed,
        homeTeamScore: match.homeTeamScore,
        awayTeamScore: match.awayTeamScore,
      });
    });
  }

  getMatches() {
    return this.matches;
  }

  getLeaderboard() {
    let games = [];

    this.matches.forEach((match) => {
      if (match.homeTeamScore !== null) {
        games.push({
          teamName: match.homeTeam,
          matchesPlayed: 1,
          goalsFor: match.homeTeamScore,
          goalsAgainst: match.awayTeamScore,
          points:
            match.homeTeamScore > match.awayTeamScore
              ? 3
              : match.homeTeamScore === match.awayTeamScore
              ? 1
              : 0,
        });

        games.push({
          teamName: match.awayTeam,
          matchesPlayed: 1,
          goalsFor: match.awayTeamScore,
          goalsAgainst: match.homeTeamScore,
          points:
            match.homeTeamScore < match.awayTeamScore
              ? 3
              : match.homeTeamScore === match.awayTeamScore
              ? 1
              : 0,
        });
      }
    });

    games.forEach((game) => {
      let teamName = "";
      let matchesPlayed = 0;
      let goalsFor = 0;
      let goalsAgainst = 0;
      let points = 0;

      games.forEach((team) => {
        if (team.teamName === game.teamName) {
          teamName = team.teamName;
          matchesPlayed++;
          goalsFor += team.goalsFor;
          goalsAgainst += team.goalsAgainst;
          team.goalsFor > team.goalsAgainst
            ? (points += team.points)
            : team.goalsFor === team.goalsAgainst
            ? (points += team.points)
            : (points += team.points);
        }
      });
      if (
        this.leaderboard.find((team) => team.teamName === teamName) ===
        undefined
      ) {
        this.leaderboard.push({
          teamName: teamName,
          matchesPlayed: matchesPlayed,
          goalsFor: goalsFor,
          goalsAgainst: goalsAgainst,
          points: points,
        });
      }
    });

    this.leaderboard.sort((a, b) => {
      let x = a.teamName.toUpperCase(),
        y = b.teamName.toUpperCase();
      return x === y ? 0 : x > y ? 1 : -1;
    });

    this.leaderboard.sort((a, b) => {
      if (a.goalsFor - a.goalsAgainst > b.goalsFor - b.goalsAgainst) return -1;
      if (a.points > b.points) return -1;
    });

    return this.leaderboard;
  }

  async fetchData() {
    await fetch("http://localhost:3001/api/v1/getAllMatches", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Não foi possível buscar os dados para esse recurso");
        }
        return res.json();
      })
      .then((data) => {
        this.setMatches(data.matches);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Requisão abortada");
        } else {
          console.log(err.message);
        }
      });
  }
}

export default LeagueService;
