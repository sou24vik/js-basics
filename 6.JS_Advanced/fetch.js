fetch("https://api.github.com/users/sou24vik")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Now using async ⬇

async function getAllUser() {
  try {
    const response = await fetch("https://api.github.com/users/sou24vik");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("ERROR");
  }
}
getAllUser();
