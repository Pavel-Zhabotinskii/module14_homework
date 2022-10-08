const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");

const studentOneNode = listNode.querySelector("student");
const nameOneNode = studentOneNode.querySelector("name");
const firstOneNode = nameOneNode.querySelector("first");
const secondOneNode = nameOneNode.querySelector("second");
const ageOneNode = studentOneNode.querySelector("age");
const profOneNode = studentOneNode.querySelector("prof")

const langAttrOne = nameOneNode.getAttribute('lang');

const studentTwoNode = listNode.lastElementChild;
const nameTwoNode = studentTwoNode.querySelector("name");
const firstTwoNode = nameTwoNode.querySelector("first");
const secondTwoNode = nameTwoNode.querySelector("second");
const ageTwoNode = studentTwoNode.querySelector("age");
const profTwoNode = studentTwoNode.querySelector("prof")

const langAttrTwo = nameTwoNode.getAttribute('lang');

const result = {
    list: [
        {
            lang: langAttrOne,
            name: firstOneNode.textContent,
            secondName: secondOneNode.textContent,
            age: ageOneNode.textContent,
            prof: profOneNode.textContent,
        },
        {
            lang: langAttrTwo,
            name: firstTwoNode.textContent,
            secondName: secondTwoNode.textContent,
            age: ageTwoNode.textContent,
            prof: profTwoNode.textContent,
        }
    ]
}
console.log(result);
