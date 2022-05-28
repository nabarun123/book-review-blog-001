import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

export default function CardSection() {
  return (
    <div
      id="cardSection"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "100px",
      }}
    >
      <Card
        image="https://images-na.ssl-images-amazon.com/images/I/413o-BDtEfL._SX324_BO1,204,203,200_.jpg"
        title="Last Tang Standing | Lauren Ho | Book Review"
        author="BY SANKALPITA ON DECEMBER 14, 2021 IN BOOK REVIEWS, CHICK-LIT BOOKS, FICTION, ROMANCE NOVELS"
        text="Andrea Tang is a thirty-three-year-old Chinese-Malaysian woman who has a seemingly perfect life. She has an enviable job as a lawyer in a reputed law firm. She lives in a posh condo and has a string of party friends. But then, Andrea has one big problem. You see, she is the Last Tang Standing when it comes to the marriage market."
        href="https://www.amazon.in/Last-Tang-Standing-hilarious-heartwarming/dp/0008400075/ref=sr_1_1?crid=2F0H4TGY12TCK&keywords=Last+Tang+Standing&qid=1644479927&sprefix=last+tang+standing%2Caps%2C542&sr=8-1"
      />
      <Card
        image="https://images-eu.ssl-images-amazon.com/images/I/51lRaXDajZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        title="Combat Skirts | Sahana Ahmed | Book Review"
        author="BY SANKALPITA ON JUNE 19, 2021 IN BOOK REVIEWS, CHICK-LIT BOOKS, FICTION"
        text="Set in the 1990s, Combat Skirts narrates the story of a bubbly and vivacious young woman, Saba Minhas. Saba has joined a law college in Calcutta, and has also enrolled herself in an army hostel (AWWA) in the city. While she had big ideas about her newfound freedom, she is disappointed upon her arrival in the city."
        href="https://www.amazon.in/Combat-Skirts-Sahana-Ahmed/dp/B07LCGJ16V/ref=sr_1_1?keywords=combat+skirts+book&qid=1644482297&sprefix=Combat+Skirts%2Caps%2C1467&sr=8-1"
      />

      <Card
        image="https://images-na.ssl-images-amazon.com/images/I/51UTM+gx50L._SY344_BO1,204,203,200_.jpg"
        title="The Kiss Quotient | Helen Hoang | Book Review"
        author="BY SANKALPITA ON DECEMBER 17, 2020 IN BOOK REVIEWS, CHICK-LIT BOOKS, FICTION, ROMANCE NOVELS"
        text="Stella Lane is a geek who loves Math and Economics. Good at her job, she lacks social skills and is miserable when it comes to the dating department. Single at thirty and constantly pushed by her Mom, Stella decides to take a leap of faith when hires the services of a professional escort, Michael Phan."
        href="https://www.amazon.in/Kiss-Quotient-Helen-Hoang/dp/0451490800/ref=sr_1_2?crid=1D6ZU47LQU654&keywords=The+Kiss+Quotient+book&qid=1644482679&sprefix=combat+skirts+book%2Caps%2C6954&sr=8-2"
      />
      <Card
        image="https://images-na.ssl-images-amazon.com/images/I/51zXWBd+5sL._SY344_BO1,204,203,200_.jpg"
        title="The Unhoneymooners | Christina Lauren | Book Review"
        author="BY SANKALPITA ON MAY 2, 2020 IN BOOK REVIEWS, CHICK-LIT BOOKS, FICTION, ROMANCE NOVELS"
        text="Expect a book that is a light and fluffy read, perfect for a lazy afternoon or a cozy night in. Expect a book that is a heartwarming summer romance. Expect a book that has a bit of drama and humour in addition to the romance. Expect a book that is lengthy but effortlessly so. Expect a book that is best suited for chick-lit and romance lovers."
        href="https://www.amazon.in/Unhoneymooners-Christina-Lauren/dp/1501128035/ref=sr_1_1?keywords=The+Unhoneymooners&qid=1644483374&sr=8-1"
      />
      <Card
        id="1"
        image="https://www.bookgeeks.in/wp-content/uploads/2018/04/wedding-pickle-400x600.jpg"
        title="Wedding Pickle | Neha Sharma | Book Review"
        author="BY SANKALPITA ON MAY 17, 2018 IN BOOK REVIEWS, CHICK-LIT BOOKS, FICTION"
        text="Wedding Pickle will appeal to the masses but more so to the female readers. Neha’s writing style combines romance and chick-lit in an almost effortless way. Her strength as a writer lies in making the book appeal to a large number of readers with the help of a story which celebrates women and their flaws."
        href="https://www.amazon.in/Wedding-Pickle-Neha-Sharma/dp/9381841373/ref=sr_1_1?crid=1KDANG3C2QVRU&keywords=Wedding+Pickle&qid=1644484078&sprefix=the+unhoneymooners%2Caps%2C3207&sr=8-1"
      />
      <Card
        image="https://m.media-amazon.com/images/I/51J87S+3YoL._SY346_.jpg"
        title="The Copenhagen Affair | Amulya Malladi | Book Review"
        author="BY SANKALPITA ON FEBRUARY 22, 2019 IN BOOK REVIEWS, CHICK-LIT BOOKS, FICTION"
        text="The Copenhagen Affair has something of everything – it has mystery, thrill, a sense of adventure, romance, illicit relationships, and a lot of drama. But what it essentially talks about are just two things – marriage and depression. The two are interrelated in the book but at the same time, they are not."
        href="https://www.amazon.in/Copenhagen-Affair-Amulya-Malladi-ebook/dp/B01EWUBBBU/ref=sr_1_1?crid=3DI8BXXW3C2LV&keywords=The+Copenhagen+Affair&qid=1644484263&sprefix=wedding+pickle%2Caps%2C496&sr=8-1"
      />
    </div>
  );
}
