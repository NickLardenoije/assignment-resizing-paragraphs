let array1 = [4, 8, 15, 16, 23, 42];

d3.selectAll(".paragraaf")
    .data(array1)
    .style("font-size", (array1) => `${array1}px`);

d3.select("#noParagraphsPresent")
    .selectAll("p").data(array1).enter().append('p')
    .text("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque aut suscipit porro tempore, aliquam sequi quasi tempora reprehenderit totam nisi.")
    .style("font-size", (array1) => `${array1}px`)