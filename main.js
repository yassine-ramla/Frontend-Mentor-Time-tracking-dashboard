fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const currentHours = [
      document.getElementById("hoursWork"),
      document.getElementById("hoursPlay"),
      document.getElementById("hoursStudy"),
      document.getElementById("hoursExercise"),
      document.getElementById("hoursSocial"),
      document.getElementById("hoursSelfCare"),
    ];
    const previousHours = [
      document.getElementById("previousWork"),
      document.getElementById("previousPlay"),
      document.getElementById("previousStudy"),
      document.getElementById("previousExercise"),
      document.getElementById("previousSocial"),
      document.getElementById("previousSelfCare"),
    ];
    const daily = document.getElementById("daily");
    const weekly = document.getElementById("weekly");
    const monthly = document.getElementById("monthly");
    if (daily.checked) {
      for (let i = 0; i < currentHours.length; i++) {
        currentHours[i].innerText = data[i].timeframes.daily.current;
        previousHours[
          i
        ].innerText = `Last Day - ${data[i].timeframes.daily.previous}`;
      }
    } else if (weekly.checked) {
      for (let i = 0; i < currentHours.length; i++) {
        currentHours[i].innerText = data[i].timeframes.weekly.current;
        previousHours[
          i
        ].innerText = `Last Week - ${data[i].timeframes.weekly.previous}`;
      }
    } else {
      for (let i = 0; i < currentHours.length; i++) {
        currentHours[i].innerText = data[i].timeframes.monthly.current;
        previousHours[
          i
        ].innerText = `Last Month - ${data[i].timeframes.monthly.previous}`;
      }
    }
    daily.addEventListener("click", () => {
      for (let i = 0; i < currentHours.length; i++) {
        currentHours[i].innerText = data[i].timeframes.daily.current;
        previousHours[
          i
        ].innerText = `Last Day - ${data[i].timeframes.daily.previous}`;
      }
    });
    weekly.addEventListener("click", () => {
      for (let i = 0; i < currentHours.length; i++) {
        currentHours[i].innerText = data[i].timeframes.weekly.current;
        previousHours[
          i
        ].innerText = `Last Week - ${data[i].timeframes.weekly.previous}`;
      }
    });
    monthly.addEventListener("click", () => {
      for (let i = 0; i < currentHours.length; i++) {
        currentHours[i].innerText = data[i].timeframes.monthly.current;
        previousHours[
          i
        ].innerText = `Last Month - ${data[i].timeframes.monthly.previous}`;
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
