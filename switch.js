function displayCountry(country) {
    const countries = ["france", "germany", "england"];
    countries.forEach((el) => {
      const block = document.getElementsByClassName(`pictures__items-${el}`);
      const btn = document.getElementsByClassName(`button__item-${el}`);
  
      if (el === country) {
        btn[0].classList.add("button__active");
      } else {
        btn[0].classList.remove("button__active");
      }
  
      if (block.length) {
        block[0].style.display = el === country ? "flex" : "none";
      }
    });
  }