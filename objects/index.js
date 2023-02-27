//question 1
const instagrampost = function( handleofauthor, content, image, numberofviews, numberoflikes) {
this.handleofauthor = handleofauthor;
this.content = content;
this.image = image;
this.numberofviews = numberofviews;
this.numberoflikes = numberoflikes;
}
//Question 2
const post1 = new instagrampost('Easy Life', 'Easy Life are an English alternative indie pop group formed in Leicester in 2017', 'https://www.nme.com/wp-content/uploads/2019/03/WYBCM-Easy-Life.jpg', 
'👁400', '👍1000');
console.log(post1)
const post2 = new instagrampost('Seayo', 'Check our Repo', 'http://www.forex.com/~/media/fd7192fb7f3a4c888e5ef49f49e8bc7f.ashx',
'👁200', '👍500');
console.log(post2);

//Question 3 (a)
function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,

    }
  
}
const musa = createPerson('Musa Dawodu', 21, 'Yaba,Lagos');
console.log(musa);
//Question 3 (b)
function createJambScores(eng, govt, lit, crk) {
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
       
  }
}

const musaScores = createJambScores(70, 85, 82, 94);
console.log(musaScores);

//What are the different ways you can clone an object? Give examples for each of them.
// 1. Object.assign()

const firstMovies = {
    writer: 'Ben Murray',
    title: 'The gods',
    yearofrelease: 2034,
}
const secondMovies = Object.assign({}, firstMovies)
secondMovies.title = 'Hercules';
secondMovies.yearofrelease = 2020;
console.log(secondMovies);
console.log(firstMovies);

//2. Spread syntax method
const thirdMovies = {... firstMovies};
thirdMovies.writer = 'John Doe';
thirdMovies.yearofrelease = 2021;
thirdMovies.title = 'The Turning';
console.log(firstMovies);
console.log(thirdMovies);

//3. JSON.parse() method
const fourthMovies = JSON.parse(JSON.stringify(firstMovies))
fourthMovies.writer = 'Orji Daniel';
fourthMovies.title = 'We are Rich';
console.log(fourthMovies);



//As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
//Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
//’Omoyele Sowore is the presidential candidate of AAC’


for (let party in presidentialCandidates) {
    console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
  }



 
