$(document).ready(function () {
    const data = [
        {
          logo: "https://cms.nhl.bamgrid.com/images/assets/binary/301172494/binary-file/file.svg",
          team: "Boston Bruins",
          gp: 10,
          w: 6,
          l: 3,
          otl: 1,
          pts: 13,
          gf: 20,
          ga: 15,
          diff: 5
        },
        {
          logo: "https://cms.nhl.bamgrid.com/images/assets/binary/291015530/binary-file/file.svg",
          team: "Florida Panthers",
          gp: 10,
          w: 7,
          l: 2,
          otl: 1,
          pts: 15,
          gf: 30,
          ga: 22,
          diff: 8
        },
        {
          logo: "https://cms.nhl.bamgrid.com/images/assets/binary/309964716/binary-file/file.svg",
          team: "Montreal Canadiens",
          gp: 10,
          w: 4,
          l: 5,
          otl: 1,
          pts: 9,
          gf: 18,
          ga: 25,
          diff: -7
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Tampa_Bay_Lightning_Logo_2011.svg/1097px-Tampa_Bay_Lightning_Logo_2011.svg.png",
          team: "Tampa Bay Lightning",
          gp: 10,
          w: 5,
          l: 4,
          otl: 1,
          pts: 11,
          gf: 28,
          ga: 26,
          diff: 2
        }
      ];
      ;
  
    function renderTable() {
      const $tableBody = $("#standingsTable tbody");
      $tableBody.empty();
  
      data.forEach((team) => {
        const row = `
          <tr>
            <td><img src="${team.logo}" width="30" height="30" alt="${team.team} logo"></td>
            <td>${team.team}</td>
            <td>${team.gp}</td>
            <td>${team.w}</td>
            <td>${team.l}</td>
            <td>${team.otl}</td>
            <td>${team.pts}</td>
            <td>${team.gf}</td>
            <td>${team.ga}</td>
            <td>${team.diff}</td>
          </tr>
        `;
        $tableBody.append(row);
      });
    }
  
    function sortTable(column, descending = false) {
      data.sort((a, b) => {
        if (a[column] > b[column]) return descending ? -1 : 1;
        if (a[column] < b[column]) return descending ? 1 : -1;
        return 0;
      });
  
      renderTable();
    }
  
    // Initial render
    renderTable();
   // Track the current sorting state
   const sortingState = {
    column: null,
    descending: false
  };

    // Event listeners for sorting
  $("th").on("click", function () {
    const column = $(this).text().toLowerCase();
    if (column === "logo" || column === "team") return;

    // Toggle sorting order if the same column is clicked
    if (sortingState.column === column) {
      sortingState.descending = !sortingState.descending;
    } else {
      // Reset to ascending order for a new column
      sortingState.descending = false;
    }

    sortingState.column = column;
    sortTable(column, sortingState.descending);
  });
});