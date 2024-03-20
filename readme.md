# StarApps Assessment

## Umbrella Customizer
[Demo Link](https://custom-umbrella-blue.vercel.app/)

### Description

The Umbrella Customizer is a web application designed to help umbrella sellers and their corporate customers customize umbrellas with logos and color options. With this tool, customers can upload their logos and instantly preview how they will look on different colored umbrellas. The customizer provides an intuitive interface for selecting umbrella colors and uploading logos, resulting in a seamless customization experience.


### Features

- **Color Options**: Choose from a variety of umbrella colors using color swatch buttons.
- **Logo Upload**: Upload your brand logo to preview how it will appear on the umbrella.
- **Instant Preview**: See a real-time preview of the customized umbrella with the uploaded logo.
- **Responsive Design**: Accessible and functional on various devices, including desktops, tablets, and mobile phones.
- **User-Friendly Interface**: Intuitive and easy-to-use interface for a seamless customization process.

### Usage

1. Select a color for the umbrella by clicking on the corresponding color swatch button.
2. Upload your brand logo using the "Upload Logo" button.
3. Preview the customized umbrella with your logo instantly.

### Installation

To run the Umbrella Customizer locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Avinash-1-10/star-apps-assesment`
2. Navigate to the project directory: `cd star-apps-assesment`
3. Open `index.html` in your web browser.

### Technologies Used

- HTML
- CSS
- JavaScript
<hr>
<br>
<br>
<br>
<br>

# Fly me to my Destination

```javascript
function minPlanesToReachLastAirport(fuelUnits) {
  const N = fuelUnits.length; // Number of airports
  const arr = new Array(N).fill(Infinity); // store minimum planes needed to reach each airport
  arr[0] = 0; // Base case: It takes 0 planes to reach the first airport

  // Loop through each airport starting from the second one
  for (let i = 1; i < N; i++) {
    // Iterate through the previous airports
    for (let j = 0; j < i; j++) {
      // Check if it's possible to reach airport i from airport j
      if (j + fuelUnits[j] >= i) {
        // Update the minimum planes needed to reach airport i
        arr[i] = Math.min(arr[i], arr[j] + 1);
      }
    }
  }

  // If it's not possible to reach the last airport, return -1; otherwise, return the minimum planes needed to reach it
  return arr[N - 1] === Infinity ? -1 : arr[N - 1];
}

console.log(minPlanesToReachLastAirport([2, 1, 2, 3, 1]));
console.log(minPlanesToReachLastAirport([1, 6, 3, 4, 5, 0, 0, 0, 6]));
```

### Credits

This project was created by [Avinash Yede](https://github.com/Avinash-1-10).
