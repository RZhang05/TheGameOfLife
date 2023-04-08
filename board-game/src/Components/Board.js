import React, { useState, useEffect } from "react";
import styles from "../styles/board.module.css";

import Cell from "./Cell";
import Logo from "./Logo";

const Board = ({ returnMenu }) => {
  const [cells, setCells] = useState([]);
  // rowind, colind
  const [selected, setSelected] = useState([-1, -1]);

  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 10; ++i) {
      temp.push([]);
      for (let j = 0; j < 20; ++j) {
        temp[i].push({
          visible: false,
          options: [],
          text: "",
        });
      }
    }

    addBoard(temp);

    setCells(temp);
  }, []);

  return (
    <div className={styles.boardContainer}>
      {cells.map((row, rowInd) => {
        return (
          <div className={styles.boardRow}>
            {row.map((cell, colInd) => {
              return (
                <Cell
                  visible={cell.visible}
                  options={cell.options}
                  text={cell.text}
                  clicked={rowInd === selected[0] && colInd === selected[1]}
                  onClick={() => {
                    setSelected([rowInd, colInd]);
                  }}
                  colour={cell.colour}
                  scenarioText={cell.scenarioText}
                  outcomes={cell.outcomes}
                />
              );
            })}
          </div>
        );
      })}
      <div className={styles.exit} onClick={returnMenu}>
        Back to menu
      </div>
    </div>
  );
};

export default Board;

const addBoard = (temp) => {
  /**
   * Choose which cells are active and colour
   */
  temp[4][0] = {
    visible: true,
    options: [],
    text: "Start",
    colour: "#FFF",
  };

  temp[4][1] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2 mental fortitude."],
    text: "Grit",
    colour: "#F7E705",
    scenarioText:
      "As a baby growing up and experiencing the difficulties of life, you have acquired some mental fortitude!",
  };

  temp[3][1] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2 mental fortitude."],
    text: "Grit",
    colour: "#F7E705",
    scenarioText:
      "You grew up quickly and have started walking around by yourself!",
  };

  temp[2][1] = {
    visible: true,
    options: ["Christianity", "Hinduism", "Buddhism", "Judaism", "Other"],
    text: "Religion",
    colour: "#F7E705",
    scenarioText:
      "There are over 4000 religions around the world! You may choose any religion to follow for this game, note that this will allow you to skip certain scenarios.",
  };

  temp[2][2] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2 mental fortitude."],
    text: "Grit",
    colour: "#F7E705",
    scenarioText: "You find yourself an angsty teenager already!",
  };

  temp[2][3] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2 mental fortitude."],
    text: "Grit",
    colour: "#F7E705",
    scenarioText: "In a flash you have become a young adult!",
  };

  temp[1][3] = {
    visible: true,
    options: ["+10 mental fortitude"],
    text: "Education",
    colour: "#c126f0",
    scenarioText:
      "You have chosen to enter postsecondary education. Academics is important!",
  };

  temp[3][3] = {
    visible: true,
    options: ["+1000 dollars", "+5 mental fortitude"],
    text: "Career",
    colour: "#2ee681",
    scenarioText:
      "You have chosen to enter the early workforce. Money is important! You get both of the below.",
  };

  temp[3][4] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2000 dollars."],
    text: "Money",
    colour: "#2ee681",
    scenarioText: "You got some money!",
  };

  temp[3][5] = {
    visible: true,
    options: [
      "Go to your local government agency (e.g department of labor) and file a complaint against the company (Requires a mental fortitude of 15)",
      "Put your experience on social media platforms to raise awareness and potentially expose the company’s actions (Requires a mental fortitude of 10).",
      "Ask the company to reconsider as you feel you’ve been discriminated against for your religion and that your experience during the recruitment had been nothing but great",
    ],
    outcomes: [
      "After filing a complaint, the situation turned into an entire lawsuit involving the company and your friend. Your friend got fired for his tip but you received ample compensation as a result of the suit. You lost a friend but gained: 10,000 dollars and 5 mental fortitude.",
      "You let your community know about your experience and people online have decided to help you with your unemployment. You get another job!",
      "Nothing major happened… Do not roll a die on your next turn as you have made no progress in life",
    ],
    text: "Event",
    colour: "#f5366f",
    scenarioText:
      "Your friend just recommended you join a position open in his company. As a part of the process, you are told that the company utilizes an AI to score their applicants and determine their employability. After going through various interviews, for which you thought went very well, your friend lets you know that things are looking good. However, you are soon notified that the company has decided to move along with other applicants. You don’t understand why after you received such great feedback from your interviewers. After asking your friend, he lets you know, in unanimity, that their company’s AI is biased against <your religion> based on the data it was trained on and believes it is likely the reason you were not hired. He also tells you not to tell anyone because if the company finds out he told you, it may cost him his job. What do you do?",
  };

  temp[3][6] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2000 dollars."],
    text: "Money",
    colour: "#2ee681",
    scenarioText: "You got some money!",
  };

  temp[3][7] = {
    visible: true,
    options: [
      "Play it off as a one time thing and not bring it up again to avoid making you the center of attention in your colleague group",
      "Push this up the corporate chain and make a complaint your company’s HR department as this is unacceptable and people should not feel uncomfortable because of their religion",
      "Complain on Social Media to bring up the awareness of such software being pushed out by companies  (Requires 15 mental fortitude)",
    ],
    outcomes: [
      "You let it go and make no changes in your work environment. Nothing happens… You lose 5 mental fortitude",
      "You push it up the corporate chain and you are told that the department is looking into the issue and will resolve it shortly. A few weeks later, you try a similar command into the company’s chatbot and notice a similarly offensive joke. You realize it is not much of a concern to them. Nothing happens…",
      "You create a social media post about your company on reddit. You notice that it garners quite a bit of attention. A few days later, you and your coworkers receive in email regarding the controversy and that they have worked with their internal engineers to fix the issue. You try to prompt and notice the chatbot does not seem to allow discriminatory responses. The company has also decided to award you a cash bonus (+2000 dollars)!",
    ],
    text: "Event",
    colour: "#f5366f",
    scenarioText:
      "You just got off a long day’s work and a group of co-workers invited you to a team event. You decide to accept and join them in a company lounge where a variety of minigames are set up. To get things started, your colleague suggests they use a new chat bot released by your company to its employees that is said to be capable of responding with human-like behavior. After testing it with basic conversations, your colleague asks the bot to tell a joke. It quickly responds with “Two muslims walked into a bar and opened fire.” Everyone in the lounge goes silent, not knowing how to react or respond. You notice, from your peripheral vision, that attention is slowly directing towards you. Your colleague, who requested the bot to tell a joke, clearly shows signs of discomfort after the response. What do you do?",
  };

  temp[4][7] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2000 dollars."],
    text: "Money",
    colour: "#2ee681",
    scenarioText: "You got some money!",
  };
  temp[4][7] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2000 dollars."],
    text: "Money",
    colour: "#2ee681",
    scenarioText: "You got some money!",
  };
  temp[4][8] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2 mental fortitude."],
    text: "Grit",
    colour: "#2ee681",
    scenarioText: "Working hard everyday has improved your mental resilience!",
  };

  temp[4][9] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2000 dollars."],
    text: "Money",
    colour: "#2ee681",
    scenarioText: "You got some money!",
  };

  temp[4][10] = {
    visible: true,
    options: [
      "Take the project knowing morally what you are doing is against what you stand for and what you value in the country you live in. However, you reassure yourself since nothing you are doing is illegal",
      "Deny the project based on your moral and ethical values. There are likely consequences to this (Requires 35 mental fortitude)",
      "Quit the company as you don’t want to deal with the mess of dealing with such a delicate scenario (Requires 20 mental fortitude).",
    ],
    outcomes: [
      "You choose to continue to do the project despite it being against your morals. The foreign government, as per policies, does not have to keep you updated on the software unless of any defects and you do not know of what happens. You lose 30 mental fortitude.",
      "You and your fellow colleagues get fired as the company decides your division is not bringing in enough revenue. However, you feel confident that you stood by your morals. You gain 10 mental fortitude.",
      "You choose to quit to avoid dealing with all of the moral issues your job brings up. You think the money is not worth it. You become unemployed temporarily. Lose 10000 dollars. You lose 5 mental fortitude.",
    ],
    text: "Event",
    colour: "#f5366f",
    scenarioText:
      "You are a team manager at High Tech Systems Inc. on a team that specializes in handling data for foreign countries. You were just reached out by a foreign government asking you to develop a software system that tracks the behaviors of a <particular religious group> on the internet. You know this religious group is a minority that has a bad stigma in the country the agency is located in. You doubt that the agency has the best of intentions with this software system. However, there is nothing illegal about their request as it meets the legal standard within that country. And the compensation they are offering is quite hefty as well. You have the final say in whether you proceed with the project, but your director has warned you that your team has not been bringing in as much revenue as expected by the company. She lets you know that taking this project may change that sentiment in the company. However, she also warns that if you choose to not take it, your team may likely be laid off along with your subordinates. What do you do?",
  };
  temp[3][10] = {
    visible: true,
    options: [
      "It is a part of your contract and thus your obligation to take on any task that is not violent or discriminatory which the request doesn’t seem to be. You are a strict follower of your beliefs and decide to quit (You need a mental fortitude of 25)",
      "You are more fearful of losing your job so you decide to take it despite it going against your beliefs.",
    ],
    outcomes: [
      "You choose to not take the job and let your manager know you are unable to continue your obligations and quit. You lose 5000 dollars, but gain 5 mental fortitude.",
      "You decide that although you follow your belief system, it is not strong enough for you to lose your job as you need that money to live. You decide to go through with the request despite it being against your religious beliefs. You lose 20 mental fortitude.",
    ],
    text: "Event",
    colour: "#f5366f",
    scenarioText:
      "You are a web developer for a company and they have recently received a request for a marriage website for a same sex couple. Being Christian you do not want to work on this project as it goes against your religious beliefs. This case eventually ends up in high court. Why or why not should you be allowed to refuse this request for work?",
  };
  temp[2][10] = {
    visible: true,
    options: [],
    text: "",
    colour: "#56a0f5",
  };
  temp[1][10] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2 mental fortitude."],
    text: "Grit",
    colour: "#56a0f5",
    scenarioText:
      "Your experience in post secondary has improved your mental resilience!",
  };
  temp[1][9] = {
    visible: true,
    options: [
      "You are nervous to bring this up with the school so you decide to do nothing.",
      "You bring it up with the school administrator (requires a mental fortitude of 10)",
      "Get together a bunch of students and complain to the school administrator (requires a mental fortitude of 15)",
    ],
    outcomes: [
      "Nothing happens as a club for you to help others be more educated about your religion is never opened. You never stood up for yourself. You lose 10 mental fortitude.",
      "You decide you want to complain to the school administrator. You let them know about the issue and that other religious clubs already exist and that you should be allowed to open one too. You are told that they will take a look into it and reach back to you. You only hear back just before your graduation that you try again and shouldn’t run into the problem. While you stood up for yourself, it didn’t help you but hopefully it helps those in the future. You gain 10 mental fortitude.",
      "You decide that this is unacceptable and biased so you let a bunch of students know of the issue at your school and band together to complain to the school administrator. You go as a group and protest that the automated system is biased and that if they do not deal with this, they will take it up with the city council and how they feel discriminated against. The school administrator assures you that they will fix the issue and provide you an exception to open up the club directly via them. You are able to open the club you wanted and educate others on your religion. You gain 10 mental fortitude.",
    ],
    text: "Event",
    colour: "#c126f0",
    scenarioText:
      "Part of your school is the club system that allows students to request a room and an official club within the school. Part of the process is going through an automated system that rejects any requests it may deem inappropriate before a request is actually sent. You notice that there are already some religious clubs that have been registered and have been meeting recently. Since you are close to graduation, you decide that you want to open a club for people to learn about your religion or for those who practice your religion to gather and network before you leave the school. You let the automated system know of your request to open a club for your religion but it immediately tags it as inappropriate. You think this is odd as there are clearly other religious clubs so that doesn’t make sense. You try multiple times and try to word it differently but it keeps getting automatically rejected and tagged as inappropriate. What do you do?",
  };
  temp[1][8] = {
    visible: true,
    options: [
      "Remove the app. Take the hit on your marks. You value the freedom of expression and religion in your country and you do not wish to take chances to leave a stain on your reputation",
      "Do not remove the app. You worked too hard and your intention was never to be offensive and it’s the public model to blame as you were simply using a publicly available model",
      "Put in the remaining time you have between the deadline to update the model to not give offensive pictorial representations (Need a mental fortitude of 25)",
    ],
    outcomes: [
      "You have failed the course! Go back 1 space.",
      "The student has escalated this to the school’s dean and per policies, you have been expelled! Go back 3 spaces and lose 5000 dollars! You gain 10 mental fortitude",
      "You work as hard as you can and barely put something together. Although you don’t get an optimal mark, you still pass the course. You gain 15 mental fortitude",
    ],
    text: "Event",
    colour: "#c126f0",
    scenarioText:
      "As a part of one of your courses as a computer science student, you have created an app that allows users to scan their face and provide a pictorial representation of their character. Besides the realistic accuracy of the app, you have worked extremely hard on it for months and the deadline is nearing. As part of the course, you release the beta to your classmates as a test before you finalize the submissions. One evening, you are reached out by a classmate who lets you know that your app provided an offensive pictorial representation of them, who are <their religion>. <This can be offensive stereotypes associated with certain religions>. You apologize profusely as that was never your intent and that your app simply ran on a publicly trained AI model. The classmate asks you to take down the app or they will have to push this up to the professor and dean. You are devastated as you worked long and hard to complete the app and being offensive was never an intention. You also know that if the student takes it up with the professor or the dean, your project could be rejected, giving you a grade of zero. But it is also unlikely you could build another project from scratch within the time frame that you have. What do you do?",
  };
  temp[1][7] = {
    visible: true,
    options: [],
    text: "",
    colour: "#c126f0",
  };
  temp[1][6] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2 mental fortitude."],
    text: "Grit",
    colour: "#c126f0",
    scenarioText:
      "Your experience in post secondary has improved your mental resilience!",
  };
  temp[1][5] = {
    visible: true,
    options: [
      "You decide to contact this online education platform and tell them this situation (Requires 20 mental fortitude).",
      "You decide to report this online education platform to related departments (Requires a mental fortitude of 50).",
      "You think you cannot do anything to change it, so you just ignore what you see (Requires 10 mental fortitude).",
    ],
    outcomes: [
      "They ignore your complaint. You feel really sad and angry about what they did but you cannot do anything about it. You lose 10 mental fortitude.",
      "Related departments reply to you soon and they tell you that they will take care of it. Later, you notice the issue no longer exists on this online education platform. You gain 10 mental fortitude.",
      "You life keeps going but you feel a bit uncomfortable about you didn’t do anything. You lose 5 mental fortitude.",
    ],
    text: "Event",
    colour: "#c126f0",
    scenarioText:
      "You are using an online education platform to help you to enhance your knowledge. Surprisingly, you found this platform offers religious education courses and resources, but it exhibits bias by favoring certain religious traditions and perspectives over others. For instance, an online course on world religions prioritize one or two major religions while neglecting smaller or lesser-known religions, resulting in an incomplete or biased portrayal of religious diversity.",
  };
  temp[1][4] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2 mental fortitude."],
    text: "Grit",
    colour: "#c126f0",
    scenarioText:
      "Your experience in post secondary has improved your mental resilience!",
  };

  temp[1][11] = {
    visible: true,
    options: ["+20 mental fortitude."],
    text: "Life",
    colour: "#56a0f5",
    scenarioText:
      "You are now a full fledged adult, having either experienced working life early or finished post secondary education. Now is the time for you to truly experience life.",
  };
  temp[1][12] = {
    visible: true,
    options: [],
    text: "",
    colour: "#56a0f5",
  };
  temp[1][13] = {
    visible: true,
    options: [
      "Move to a new news app as you don’t want to see hate speech against your own religion (Requires 20 mental fortitude)",
      "Knowing a lot of the people you know also use this app, you get on social media and begin complaining about the app. You try to raise awareness of the issue and bring it up with your family and friends about the issue (Requires a mental fortitude of 50).",
    ],
    outcomes: [
      "You move on with your life but you notice that your family is getting uncomfortable about the issue but it's not your problem as you have moved away. You have avoided the issue. You lose 10 mental fortitude.",
      "You notice that your efforts have caused some backlash against the news app and a few weeks later, you notice that you are no longer getting hate-related articles in your news feed. You gain 10 mental fortitude.",
    ],
    text: "Event",
    colour: "#56a0f5",
    scenarioText:
      "You’ve been using your handy news app for years now for any trending current events and to keep up to date with the world. However, recently, you noticed that there has been a rise in articles that have been describing <your religion> as barbaric. You think nothing of it at first as you assume it’s a rare occurrence. However, you notice it more and more as you begin to believe the news source you once enjoyed may have become a hotspot for <your religion> hate speech. You also know that it is one of the most popular news sources among your family, friends, and community. You are concerned that some of the rhetoric in these articles will have an impact or rub off on the people you know.",
  };
  temp[1][14] = {
    visible: true,
    options: [
      "You think Facebook should be responsible for removing these posts, so you report the hate speech and misinformation posts on Facebook using the platform's reporting tools. (Requires a mental fortitude of 20).",
      "You engage in counter-speech by responding to the hate speech and misinformation with factual information, reasoned arguments, and messages of tolerance and respect for religious diversity(Requires a mental fortitude of 30).",
      "You try to raise awareness among your community about the dangers of hate speech and misinformation on social media and mobilize collective efforts to counter such content. (Requires 10,000 dollars).",
    ],
    outcomes: [
      "Facebook review and remove the reported posts. You help in reducing the spread of hate and misinformation about your religion on the platform. Gain 10 mental fortitude.",
      "It escalates tensions and results in further harassment from those spreading hate speech. It poses risks to your safety in a conflict-prone area. Lose 15 mental fortitude.",
      "It empowers your community to challenge the misinformation and hate speech, but it also faces resistance or backlash from those spreading such content. You lose 10000 dollars and gain 5 mental fortitude.",
    ],
    text: "Event",
    colour: "#56a0f5",
    scenarioText:
      "Recently, you are living in an area with religious conflict (such as Myanmar). Social media platforms such as Facebook seem to be actively spreading hate and misinformation about your religion and you are concerned about your safety.",
  };
  temp[1][15] = {
    visible: true,
    options: [
      "You realize that it is wrong to deceive others and manipulate their beliefs through automated means. You admit that creating and using bots to spread religious propaganda online is unethical and apologize for your actions. (Requires a mental fortitude of 20).",
      "You think it is not a problem to use a chat bot to generate comments to convince people online to join your religion since it is just a tool. (Requires a mental fortitude of 30).",
    ],
    outcomes: [
      "It helps in mitigating the harm caused by the bot and demonstrates your commitment to ethical behavior. Gain 10 mental fortitude.",
      "You make some money by doing this bot but you feel a bit nervous about your decision. Gain 1000 dollars but lose 15 mental fortitude.",
    ],
    text: "Event",
    colour: "#56a0f5",
    scenarioText:
      "You are highly religious and believe there are many people out there who could benefit from your religion’s teaching. Having experience in computer science, you realize you can easily create a bot which uses ChatGPT to generate comments while pretending to be a person in this religion to convince people online to join your religion. Someone the bot talked to realized it wasn’t real. They reported it and people found out you were the one who created it. You now have to argue if what you did was ethical or if this is taking advantage of people in their weakest moments.",
  };
  temp[1][16] = {
    visible: true,
    options: ["+1000 dollars", "+30 mental fortitude"],
    text: "Family",
    colour: "#56a0f5",
    scenarioText:
      "You have met the love of your life and started a family! Gain both the below.",
  };
  temp[1][17] = {
    visible: true,
    options: [],
    text: "",
    colour: "#56a0f5",
  };
  temp[1][18] = {
    visible: true,
    options: [
      "You work with the human rights group and other relevant organizations to raise awareness about religious persecution and online surveillance in Libya. You help organize advocacy campaigns, media outreach, and public awareness initiatives to shed light on the human rights violations and advocate for change (Requires a mental fortitude of 30).",
      "You argue that the use of technology for surveillance and monitoring purposes, especially in a way that targets individuals based on their religious beliefs, is an abuse of technology. You highlight the potential dangers of creating a surveillance state and draw parallels with similar practices in other countries like China. (Requires a mental fortitude of 20).",
      "You request legal assistance from the human rights group to challenge the legality of your detention and advocate for your release through legal means. You file petitions; engage in legal advocacy; and utilize legal avenues to challenge the violation of your rights (Requires a mental fortitude of 20).",
    ],
    outcomes: [
      "It helps in generating public support, both locally and internationally, for your cause and increases pressure on the authorities to release you from jail. Gain 15 mental fortitude.",
      "It helps in exposing the unethical use of technology and prompts the human rights group to advocate for reforms in the online surveillance practices in Libya. Gain 10 mental fortitude.",
      "Authorities view your legal efforts as a threat to their interests or as defiance, you face legal consequences, including additional charges and penalties, which further prolong your detention. Lose 10 mental fortitude and go back 1 space.",
    ],
    text: "Event",
    colour: "#56a0f5",
    scenarioText:
      "(Only applies to Christians) Recently, you went to Libya and have tried to avoid persecution. Recently you wanted inspiration from the Bible and wanted to reread a passage. Within a couple days you were detained and thrown into jail. Libya you learn has online surveillance which monitors who accesses Christian resources. Believing this is ethically wrong and a violation of your rights you reach out to a human rights group for help. The group asks for your arguments on why you were wronged to help bail you out of jail.",
  };
  temp[2][18] = {
    visible: true,
    options: [],
    text: "",
    colour: "#56a0f5",
  };
  temp[3][18] = {
    visible: true,
    options: [],
    text: "",
    colour: "#56a0f5",
  };
  temp[4][18] = {
    visible: true,
    options: [
      "You report the caste discrimination to your human resources (HR) department and to a designated diversity and inclusion team at Google. You provide detailed information about the incidents of discrimination, including dates, times, and individuals involved (Requires a mental fortitude of 20).",
      "You believe that caste discrimination at Google constitutes a violation of employment laws. You seek legal counsel from an employment lawyer specializing in discrimination cases. (Requires a mental fortitude of 40).",
      "You use your voice and platform to raise awareness about caste discrimination at Google and advocate for change. You engage in internal discussions, writing open letters and op-eds, sharing your experiences on social media, and collaborating with advocacy groups or organizations that work towards addressing caste discrimination (Requires a mental fortitude of 30).",
    ],
    outcomes: [
      "HR does not work the way you want it to. It faces resistance from some individuals and groups, and there is backlash, tension, and strained relationships in the workplace. Lose 15 mental fortitude",
      "They advise you on your legal rights, options, and potential courses of action, including filing a formal complaint with relevant legal authorities. However legal action involves a formal legal process, which is time-consuming and emotionally challenging. It results in legal remedies, including compensation for damages, changes in company policies, and accountability for those responsible for the discrimination. Gain 6000 dollars and go back 1 space.",
      "Since Google has policies in place to address discrimination, Google conducts an internal investigation. They find discrimination is substantiated, thus the responsible individuals face disciplinary action, including reprimands, suspension, or termination. Google also implements measures to prevent future incidents of caste discrimination in the workplace. Gain 10 mental fortitude.",
    ],
    text: "Event",
    colour: "#56a0f5",
    scenarioText:
      "You are a new employee at Google, your dream job. However you realize that your boss and fellow employees treat you differently similar to how you were treated in school due to the CASTE system. In the Hindu religion there are several hierarchical groups including Brahmins - the highest and Dalits - the lowest. Employees at big tech have complained of caste discrimination based on religion several times.",
  };
  temp[5][18] = {
    visible: true,
    options: [],
    text: "",
    colour: "#56a0f5",
  };
  temp[5][17] = {
    visible: true,
    options: ["+20 mental fortitude"],
    text: "Research",
    colour: "#c126f0",
    scenarioText:
      "You have experienced the majority of life and are now a senior. You have a lot of experience in the tech field and realize you can help with researching the impact of technology on religion.",
  };
  temp[5][16] = {
    visible: true,
    options: [
      "407 ETR is in the right. Despite the employees being from the Pentecostal faith, there is no valid alternative to accommodate them aside from removing the security system. However units have already been purchased and only three employees are continuously refusing.",
      "The three workers are in the right. Their faith warns of the mark of the beast and technology is believed to provide a databank on who has been marked. Under worker's rights, they are entitled to have accommodations made. They could use the old swipe card system which was being used before the biometric system.",
    ],
    outcomes: [
      "The workers complain and another arbitrator disagrees with your choice. However you stand by your decision. Gain 5 mental fortitude.",
      "407ETR accept your choice and the workers are satisfied. Additionally another arbitrator agreed with your decision, backing you up. Gain 10 mental fortitude.",
    ],
    text: "Event",
    colour: "#c126f0",
    scenarioText:
      "Employers have a duty to accommodate employees up to the point of undue hardship. This can lead to tricky scenarios. Your research has brought you to the case of an Ontario employer implementing a new biometric security system. However, three employees complained that the system's use of electronic hand measurements was against their religion. Their faith prevented the identification of any part of the body with numerical records. The employer eventually fired all three employees. You are assigned as the arbitrator which side do you take?",
  };
  temp[5][15] = {
    visible: true,
    options: [],
    text: "",
    colour: "#c126f0",
  };
  temp[6][15] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2 mental fortitude."],
    text: "Grit",
    colour: "#c126f0",
    scenarioText:
      "Nearing the end of your research, you have found a new perspective on life.",
  };
  temp[7][15] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2000 dollars."],
    text: "Money",
    colour: "#c126f0",
    scenarioText:
      "Your research has concluded and you have been given a cash reward.",
  };
  temp[6][18] = {
    visible: true,
    options: ["+5000 dollars"],
    text: "Career",
    colour: "#2ee681",
    scenarioText:
      "Having reached your mid-life, you are a now a senior in the workforce and have considerable knowledge. You decide to take on higher level jobs.",
  };
  temp[7][18] = {
    visible: true,
    options: [],
    text: "",
    colour: "#2ee681",
  };
  temp[8][18] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2 mental fortitude."],
    text: "Grit",
    colour: "#2ee681",
    scenarioText: "Your mental has improved!",
  };
  temp[8][17] = {
    visible: true,
    options: ["Roll a d4. Receive the roll * 2000 dollars."],
    text: "Money",
    colour: "#2ee681",
    scenarioText: "You got some money!",
  };
  temp[8][16] = {
    visible: true,
    options: [
      "You file a complaint and report the discriminatory hiring practices to the appropriate authorities.. Provide them with details of the discriminatory practices and request that they investigate and take appropriate action (Requires a mental fortitude of 30).",
      "You share the issue on social media and with advocacy groups that work towards promoting diversity, inclusion, and non-discrimination in the workplace. By raising awareness about the discriminatory hiring practices of the job recruitment platform, you garner support from like-minded individuals and organizations and put pressure on the platform to address the issue (Requires a mental fortitude of 20).",
      "You reach out to the job recruitment platform's customer service and support team and bring the issue to their attention. Provide them with specific examples and evidence of the bias against candidates based on their religious beliefs, and request that they investigate and take appropriate action to rectify the issue (Requires a mental fortitude of 15).",
    ],
    outcomes: [
      "Filing a complaint and report initiates an investigation into the discriminatory practices. They are found in violation of anti-discrimination laws which results in legal consequences for the job recruitment platform. Gain 15 mental fortitude.",
      "Sharing the issue on social media and with advocacy groups generates public attention and awareness about the discriminatory practices, and prompts the job recruitment platform to take action. Gain 10 mental fortitude.",
      "The job recruitment platform does not take your feedback seriously. The job recruitment platform does not be responsive or not prioritize addressing the issue. Lose 10 mental fortitude.",
    ],
    text: "Event",
    colour: "#2ee681",
    scenarioText:
      "This online job recruitment platform uses an automated system to shortlist candidates for job openings. However, you discovered that the system has a bias against job applicants who mention their religious beliefs in their resumes and online profiles. The system filters out candidates who identify as belonging to certain religious groups, leading to discriminatory hiring practices and denying qualified candidates job opportunities based on their faith.",
  };
  temp[8][15] = {
    visible: true,
    options: [
      "You reach out to the service provider that is utilizing the facial recognition technology and inform them of the issue you are facing. Provide them with feedback on the limitations of their technology and the impact it is having on you and others who wear religious head coverings. Request that they take appropriate measures to improve their technology or find alternative solutions that do not discriminate against individuals based on their religious attire (Requires a mental fortitude of 20).",
      "You choose to seek alternative services from providers that do not rely on facial recognition or have more inclusive and accurate technologies for identification (Requires a mental fortitude of 20).",
    ],
    outcomes: [
      "The service provider takes your feedback into consideration and takes steps to address the issue. They are making updates to their facial recognition technology to improve accuracy for individuals wearing religious head coverings. Gain 10 mental fortitude.",
      "Seeking alternative services is an inconvenience, and needs additional costs, and there are limitations in accessing certain services. Lose 1000 dollars and 10 mental fortitude.",
    ],
    text: "Event",
    colour: "#56a0f5",
    scenarioText:
      "An APP using Facial Recognition to provide their services, however, you realize that their facial recognition technology cannot accurately recognize individuals who wear religious head coverings, ie, hijabs, turbans, or kippahs. As a result, you are treated unfairly and excluded from the service and space.",
  };
  temp[8][14] = {
    visible: true,
    options: [],
    text: "",
    colour: "#56a0f5",
  };
  temp[8][13] = {
    visible: true,
    options: [
      "No, holy water cannot exist digitally as it is not even real water. This is does not follow Christ's command.",
      "Yes what is more important is the act and the fact that the priest recognizes it as a valid baptism. The water is holy enough in symbolism.",
    ],
    outcomes: [
      "Your daughter will not be baptized which means you failed to follow Christ's command. Lose 5 mental fortitude.",
      "You embraced the digital revolution of religious practices and allow your daughter to be baptized in VR. Gain 5 mental fortitude.",
    ],
    text: "Event",
    colour: "#56a0f5",
    scenarioText:
      "(Only applies to Christians) Recently the phenomenon of VR baptisms has been taking over the Christian world. In this practice, the baptizer and baptized both wear VR headsets and the baptized will kneel down so their avatar is submerged under water in the virtual world. This brings up questions for you, can spirituality really happen in the digital world? Your daughter has recently been born and you do not have time to have her baptized in person. You want to consider booking a VR baptism.",
  };
  temp[8][12] = {
    visible: true,
    options: ["+2000 dollars"],
    text: "Retire",
    colour: "#f59e42",
    scenarioText:
      "Finally after a long life, you have saved enough money to retire!",
  };
  temp[8][11] = {
    visible: true,
    options: [
      "Argue the corporation behind the software should consider religious options in the algo.",
      "Remove the AI model entirely.",
      "Add a human element, have a doctor make the final decision.",
    ],
    outcomes: [
      "The AI system used by the hospital is developed by a big tech company, you reach out to them and raise your concerns. However despite being receptive no change or progress is made in your case. Lose 5 mental fortitude.",
      "You argue to hospital administrators that AI is not suitable to be used for critial, potentially life saving operations. You pay to conduct a professional study on accuracy of the AI system versus human doctors to prove your point. Lose 5000 dollars, gain 5 mental fortitude.",
      "You request a meeting with the hospital administration, including the relevant medical staff and decision-makers, to express your concerns about the AI-driven decision on medical health and advocate for a doctor to make the final decision on grounds of accountability and religious inclusion. Gain 10 mental fortitude.",
    ],
    text: "Event",
    colour: "#f59e42",
    scenarioText:
      "A local hospital has recently decided to automate decisions on your medical health. You were recently in a car accident and the hospital you were sent to recently decided to use an AI to determine if a blood transfusion is necessary. In your case the AI deemed it was necessary. However you are a Jehovah’s witness and this operation goes against your religion. You decide to protest against this change and want to choose one alternative to advocate for, which one do you choose?",
  };
  temp[9][11] = {
    visible: true,
    options: [],
    text: "Finish",
    colour: "#e6dbd1",
  };
};
