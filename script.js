var yes = 0;
var no = 0;

var chart;
var youth_data = {
  Celeste_Aguilar: {
   id: "Celeste_Aguilar",
   name: "Celeste Aguilar",
   age: 16,
   location: "Washington, D.C",
   imageURL: "image1.png",
   twitter: "https://twitter.com/youthradio?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>As a young Latina student, I’m fighting for justice in my society, like equality and safety for all individuals — no matter their immigration status, sex or race. I stand and I speak up for others and I attend marches and protests for rights and participate in any kind of protest that will benefit us, young and old, because it will make a change but we have to work together for change. I do this because I strongly believe that the more people who seek change, the quicker the change will come. I’m only one, but when it comes to numbers, we can all work to make a difference. I matter, and my voice matters. MLK voiced his concerns, and we should join him in this effort. It’s pivotal for all living in the U.S. to stand for social justice issues because without it there wouldn’t be any order. We need a change for future generations to have good morals, positive mindset and to live at peace.</p>"
  },


  Hamdia_Ahmed: {
   id: "Hamdia_Ahmed",
   name: "Hamdia Ahmed",
   age: 20,
   location: "Portalnd, Maine",
   imageURL: "image2.png",
   twitter: "https://twitter.com/hamdia_ahmed",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>I am fighting for a world where everyone is treated with respect and dignity. We must never watch people get oppressed on our own watch. We cannot be silent in the face of injustice because it is our duty to stand up for our brothers and sisters. Dr. Martin Luther King, Jr. inspired us to not stay silent, and we must continue his legacy. I have been, in particular, fighting for Muslims, immigrants and black people in this country because I fit into these groups. We live in a country where people are told to go back to their country, the spread of hatred towards Muslims, and black people getting murdered by the police for no reason. We have a leader who promoted hatred and division. What makes people a true patriot is when they fight for the rights of their fellow Americans.</p>"
  },

  Ziad_Ahmed: {
   id: "Ziad_Ahmed",
   name: "Ziad Ahmed",
   age: 19,
   location: "Princeton, NJ, Yale University",
   imageURL: "image3.png",
   twitter: "https://twitter.com/ziadtheactivist",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>As an American-Muslim teenager, I am fighting for (in whatever capacity I can be helpful/useful) a tomorrow where every child can be loved, accepted, and confident/safe in their own skin.More than that, I’m fighting for a world where every child has the space to dream unapologetically — and has the agency/ability to achieve their dreams, whatever they might be. I fundamentally believe that this world is better when every voice is empowered, when we are not limited by societal expectations, and when we disrupt the status quo to shift paradigms forward.I am inspired by those before me — many of whom are people of color, women, queer, and representative of the diversity that exists in our world. I find hope in the strides that leaders like Dr. Martin Luther King Jr. were able to make — by speaking truth to power, by working tirelessly for better, and by resisting systems of inequality. I hope to be a part of that same fight, as I hope to follow the lead of those who have been doing this work far longer/better than me.As I look around this world, I see institutionalized racism, patriarchal power, imperialist foreign policy, ignorant leaders, children being left behind, and broken justice systems. I see a world that needs radical change. I am fighting for that world because I believe in the power of humanity to create a more just world, because I believe it’s my responsibility to love this world enough to want to make it better.I fight for better, because InshAllah (God willing), we will be better.</p>"
  },


   Santos_Amaya_Guevera: {
   id: "Santos_Amaya_Guevera",
   name: "Santos Amaya Guevara",
   age: 16,
   location: "Washington, D.C",
   imageURL: "image4.png",
   twitter: "https://twitter.com/youthradio?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>Martin Luther King was a great leader who fought for civil and human rights to protect and defend the dignity and value of his people, and all people for that matter. I believe that his spirit is still alive today because he is still a role model which has inspired and motivated other leaders across the world, including myself.As a Latina activist, I have been participating in different advocacy roles to combat discrimination and racism, while also celebrating and uplifting diversity.I, alongside my friends, founded and developed the Latino Youth Leadership Council (LYLC), a group bringing together students from various high schools in D.C., with the mission to organize and mobilize to assess, develop, and implement opportunities and alternatives for recent immigrant Latino students in D.C. public schools and other educational systems in the District of Columbia.The Latin American Youth Center supports us by providing community organizing support and mobilizing knowledge and skills, and together we are organizing powerful community conferences, youth summits, and we have even created a powerful book called “Voices Without Borders: Our Stories, Our Truth,” hoping to counter the deceiving national anti-immigrant rhetoric that taints and dehumanizes immigrant youth.What I have learned from Martin Luther King is that when we are quiet about the things that matter, darkness gets stronger, injustice rules, and people suffer. This is why I believe that there is power in fighting for what we believe in, especially us, the youth. If we fight, something will change. We must be committed to work hard to make changes and not give up until we get what we need and deserve.I fight for justice, for equity, for a better future, for an education, and to make youth voices be heard because youth voices matter. Youth voices are powerful. Youth have more knowledge than people think, and they need to speak their truth.Too many undocumented youth are scared to speak because they don’t know English and because the real threat of police forces trying to separate them from their families, but we must not stay quiet, just like Martin Luther King did not stay quiet in the face of oppression.I fight and represent undocumented youth because I believe one person can let them know that they are not alone, and — more important — that together we are going to win this fight against injustice.</p>"
  },

   Anya_Andrews: {
   id: "Anya_Andrews",
   name: "Anya Andrews",
   age: 18,
   location: "Los Angeles, California",
   imageURL: "image5.png",
   twitter: "https://twitter.com/youthradio?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>I am fighting for Black and Brown people to reach the mountaintop King spoke about that many years ago. I am fighting for Black excellence. I am fighting for Black Liberation. I am fighting for Black education. I am fighting for the success of Black America.However, this fight has many scales, and we must remember that there are levels to every fight, just as there are battles in every war. There are some of us who struggle just to get out of bed in the morning. We’re battling ourselves just as we are battling systematic oppression, overt and covert racism, and the invisible White Only signs that exist across America.We are fighting a two-front battle, which makes it hard to see where we’re going and where we can succeed as Black people. Our self-hate is reinforced by their hate, and thus reiterates the vicious cycle of loathing. What I am fighting for is the belief in a future that we have yet to see. I am fighting for children to understand their rights and see their barriers so they can knock them down. As long as difference is used to define us, we will always be segregated. And to answer your question as to why I fight: How can I not? I have been given the access to education and the privilege to study and participate in organizations that fight for our power, our rights, and our excellence. Not everyone has the privilege that I have had to learn about our oppression and articulate it to the world.I see it as my responsibility to fight for those who cannot, to fight for those who are lost to the system, to fight for those who are hidden behind numbers and demographics, and to fight for those whose voice have been muted year after year, generation after generation, time and time again. Young people like Giavonni and I are the Freedom Fighters of today, and we will always stand for our people.</p>"
  },

   Seun_Babalola: {
   id: "Seun_Babalola",
   name: "Seun Babalola",
   age: 20,
   location: "Bronx, N.Y., Penn State ",
   imageURL: "image6.png",
   twitter: "https://twitter.com/seuntheactivist",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>Fifty years after MLK’s assassination, I am still fighting for social justice among my peers, which are Black youth and, specifically, college students. As a Black college student currently attending a predominantly white institution, I’m not blind to the injustices that people still face today in 2018, and especially on college campuses where there is a mix of ideas being put together in the same space.There are many of my peers who are Black that have experienced various acts of hatred, and it only shows that more work needs to be done. One of the key driving forces to my activist work is the fact that I know we aren’t where we need to be yet in terms of equity or equality, and Dr. King’s vision for the future in terms of equality still needs to be reached.Through my lens, until my fellow Black college students, especially those at PWI’s, can have a college experience without being targeted, harassed, or physically hurt based off of the color of their skin, there is still work that needs to be done./p>"
  },


   Mari_Copeny: {
   id: "Mari_Copeny",
   name: "Mari Copeny",
   age: 10,
   location: "Flint, MI",
   imageURL: "image7.png",
   twitter: "https://twitter.com/littlemissflint",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>I am fighting for Flint kids and for kids all around the country to be able to grow up in a world that sees their potential and not just where they are from or the color of their skin.</p>"
  },

   Grace_Dolan_Sandrino: {
   id: "Grace_Dolan_Sandrino",
   name: "Grace Dolan-Sandros",
   age: 17,
   location: "Washington, D.C",
   imageURL: "image8.png",
   twitter: "https://twitter.com/graceadvocates",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>I fight for equality and dignity for trans individuals who are too often not awarded their human rights. I fight for trans students to who face legislated danger in their schools. I fight for the trans women of color who are killed every year.We fight to be seen as humans. We fight for our dignity. We fight for our lives. We fight for justice.</p>"
  },

   Katie_Eder: {
   id: "Katie_Eder",
   name: "Katie Eder",
   age: 18,
   location: "Shorewood, WI",
   imageURL: "image9.png",
   twitter: "https://twitter.com/katie_eder",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>I am fighting so every single child, no matter who they are or where they come from, can feel safe walking down the street, playing on the playground, and going to school. I am fighting because 96 people die every day from gun violence in this country and that number is 96 too many. I am fighting because it’s the only way change is going to be made.</p>"
  },
   Nikhil_Goyal: {
   id: "Nikhil_Goyal",
   name: "Nikhil Goyal",
   age: 22,
   location: "Long Island, NY",
   imageURL: "image10.png",
   twitter: "https://twitter.com/nikhilgoya_l",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>The legacy of Martin Luther King, Jr. has been sanitized over the past half century. He unapologetically campaigned for full employment: jobs for all, abolition of poverty, universal health care, affordable, desegregated housing, and integrated education, but unfortunately, little of this has been fulfilled. Too many Americans are still suffering from economic exploitation, systemic racism, and state violence. Referred to as “ghetto schools” in the 1960s, our urban public schools remain deeply segregated, hamstrung by starvation funding, and thus, ultimately fail to educate the whole child and equip our young people with the ability to think “intensively” and “critically,” a core purpose of education according to King.I have sought to carry on King’s dreams by fighting for a child-centered, equitable public education system for all, not just the offspring of affluent, white families, fair housing measures to integrate our lily-white communities, and a federal job guarantee so that anyone able and willing to work will have a living wage job. We must revive the radical imaginations of our ancestors and struggle for a world free of oppression, violence, and injustice.</p>"
  },

   Shawn_Goyal: {
   id: "Shawn_Goyal",
   name: "Shawn Goyal",
   age: 16,
   location: "Birmingham, AL",
   imageURL: "image11.png",
   twitter: "https://twitter.com/youthradio?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>I Insults, anger, and violence leads to us feeling further apart, with everyone becoming stuck in their right opinion and political discussions becoming increasingly polarized.Over 50 years ago, Martin Luther King Jr. fought the polarizing issue of racism through nonviolent social change. Today, I fight for effective civil discourse. When people show up to their classrooms, workplaces, and political stages willing to listen to opposing viewpoints and participate in thoughtful discussions, only then can real change be achieved and effective solutions be implemented.</p>"
  },

   Merrit_Jones: {
   id: "Merrit_Jones",
   name: "Merrit Jones",
   age: 20,
   location: "Columbia, SC",
   imageURL: "image12.png",
   twitter: "https://twitter.com/merritjones",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>I’m fighting for education equity. Every student has a right to a quality education that allows them to find both their voice and passion. I continue to fight because I know we have a long way to go, but I know that students, now more than ever, are ready to see change enacted in schools. A youthquake is shaking America, and together we’ll fight for equity.</p>"
  },

   Brittany_King: {
   id: "Brittany_King",
   name: "Brittany King",
   age: 28,
   location: "Columbus, IN",
   imageURL: "image13.png",
   twitter: "https://twitter.com/youthradio?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>I fight for our chained ancestors. I fight for what the civil rights activists died for. I fight for what we continue to march for: liberation, equity, and freedom.MLK sacrificed his life and was murdered at 39 years old for the fight, and as a black person, I feel it’s my duty to participate in mobilizing for the betterment of every aspect of our black lives.The fight is long from over. We still have a lot to do. We still have a ways to go. But I won’t let all the Black lives who fought for mine be in vain. The ones who escaped underground, the ones who continued to pick cotton, the ones who marched on Edmund Pettus Bridge, the ones who hung because of their existence…White supremacy is no match to our defiance to matter. Our persistence is a threat, our existence is a reminder. We were never supposed to be free, we were never supposed to fight back. So no wonder the three scariest words in the English language is Black Lives Matter. I fight for all that.</p>"
  },

   Clifton_Kinnie: {
   id: "Clifton_Kinnie",
   name: "Clifton Kinnie",
   age: 21,
   location: "St. Louis, Missouri",
   imageURL: "image14.png",
   twitter: "https://twitter.com/CliftonKinnie",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>I’m fighting for black liberation. In August 2014 – shortly after my mother died from breast cancer – the killing of Michael Brown Jr. thrust my community of St. Louis and Ferguson into utter chaos. I stood side by side with several other high school students, while we were tear gassed and hit with rubber bullets.I founded Our Destiny STL, a network of over 300 students in 30 schools conducting voter registration and walkouts. I met with President Obama to discuss police reform during protests in the summer of 2016.I’m organizing with other student activists now to make sure that police violence is included in the gun reform conversation during #MarchForOurLives.</p>"
  },

   Tiffany_Dena_Loftin: {
   id: "Tiffany_Dena_Loftin",
   name: "Tiffany Dena Loftin",
   age: 28,
   location: "Washington, D.C",
   imageURL: "image15.png",
   twitter: "https://twitter.com/TiffanyDLoftin",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>I’m fighting for black liberation. In August 2014 – shortly after my mother died from breast cancer – the killing of Michael Brown Jr. thrust my community of St. Louis and Ferguson into utter chaos. I stood side by side with several other high school students, while we were tear gassed and hit with rubber bullets.I founded Our Destiny STL, a network of over 300 students in 30 schools conducting voter registration and walkouts. I met with President Obama to discuss police reform during protests in the summer of 2016.I’m organizing with other student activists now to make sure that police violence is included in the gun reform conversation during #MarchForOurLives.</p>"
  },


   Sara_Mora: {
   id: "Sara_Mora",
   name: "Sara Mora",
   age: 21,
   location: "Hillside, N.J. ",
   imageURL: "image16.png",
   twitter: "https://twitter.com/misssaramora",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>I fight for the justice and for the rights of the lives of undocumented people. Not only in the Garden State, but also all across the United States. The USA is a melting pot, and we all have a generation in our family tree that migrated, if not ourselves.Time and time again we are handed the leftover crumbs to work with. Our parents pay taxes and work many times up to three jobs but are still considered second-class citizens. I fight because I am an immigrant and DACA recipient. My parents are immigrants, but we are working day to day. Our parents work every single day.We as youth are rising up as leaders in education, science, business. When I fight, I fight for my family, for my community and for the rights of people who are not asking for anything more than the chance at living and creating a better future. There is power in fighting back because when we fight back, we say no to oppression and hate.I believe it is important to fight back as a directly impacted person because I am telling the younger people behind me to not fear and to be brave. Fighting is a means of survival, and to not do so would be to give in to the fear.</p>"
  },

   RaeVen_Ridgell: {
   id: "RaeVen_Ridgell",
   name: "RaeVen Ridgell",
   age: 25,
   location: "Indianapolis, IN",
   imageURL: "image17.png",
   twitter: "https://twitter.com/youthradio?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>I fight to dismantle oppression and the systems that accompany it. Unfortunately people don’t recognize that today’s civil rights movement doesn’t look like that of our parents and grandparents; because of this, so many individuals have been dismissed, particularly Black and Brown women.This is why I fight the hardest: so that no little Black or Brown girl after me may feel as if her voice doesn’t matter because she doesn’t speak the language individuals think she should speak, she doesn’t practice the religion people say she should practice, she doesn’t love who people say she should love, or she doesn’t identity as people say she should identify. I want those little girls to always feel empowered.I want the systems of oppression that govern their discomfort and the discomfort of so many others to be completely dismantled, and I’ll do this until my last breath.</p>"
  },

   Courtney_Roberts: {
   id: "Courtney_Roberts",
   name: "Courtney Roberts",
   age: 14,
   location: "Nacogdoches, TX",
   imageURL: "image18.png",
   twitter: "https://www.instagram.com/everydayblackgirl/",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>Not only do I fight for those that look like me, I fight for those within my generation, Gen Z. Many times we’re told that we’re just ruthless teenagers and we need to sit down and be quiet, when in reality, we are the change makers within our society. We are the current leaders and innovators. Our voices, especially those of the marginalized, are needed more than ever under the current administration and political climate. Our opinions and our actions are needed to move this country forward. Our drive and our determination to make a change is what this country needs.</p>"
  },

   Sojourner_Rouco_Crenshaw: {
   id: "Sojourner_Rouco_Crenshaw",
   name: "Sojourner Rouco-Crenshaw",
   age: 16,
   location: "Birmingham, AL",
   imageURL: "image19.png",
   twitter: "https://twitter.com/youthradio?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
   text: "<p>or me, it is incredibly important to fight for gun control. As a youth in school right now, enough is enough. Schools should be a safe place that fosters a positive environment. That is why it is necessary to fight for a solution to the problem that will have a meaningful impact, like keeping dangerous weapons out of our communities. As youth, it is important for us to be involved in decisions that will impact our future because we must fight for change to better our world and save lives.</p>"
  },

   Giavonni_Williams: {
   id: "Giavonni_Williams",
   name: "Giavonni Williams",
   age: "",
   location: "None",
   imageURL: "image20.png",
   twitter: "https://twitter.com/MillionHoodies",
   question:"Do you think what this person is fighting for is needed in your community?",
   option1: {
     label: "yes",
     count: 0
   },
   option2: {
     label: "no",
     count: 0
   },
  text: "<p>I fight to survive, for the right to have accessible healthcare and security.In April 2018, I am still fighting to prove that the Black experience is NOT singular. I fight because on a college campus where I am supposed to feel loved and supported, I experience hostility and scrutiny, all for being Black. I cannot move, I cannot resist, I cannot speak without being inspected and generalized. So, as sad as it may be, I am fighting and will always fight for these civil liberties.I fight — we fight — to destroy the invisible wall that stands between Black and Brown bodies that hinders us from achieving greatness. My struggle for equality, security and equity is a beautiful nightmare, but I will never destroy barriers alone.So my fight is also one for unity, a coalition of the underrepresented; if we do not protect and love each other, then no one else will. The fight goes on.</p>"
  }


}


function processClick(id) {
  document.getElementById('grid').hidden = true
  document.getElementById('profile').hidden = false

  document.getElementById("profile").innerHTML = getProfileTemplate(youth_data[id])

  chart = new CanvasJS.Chart("chartContainer", {
    title:{
      text: "Yes vs. No"
    },
    data: [
    {
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "column",
      dataPoints: [
        { label: "yes",  y: yes  },
        { label: "no", y:  no  },

      ]
    }
    ]
  });

  console.log(youth_data[id])
}

function getGridTemplate(person) {


  var template = `
  <div class="card hand" style="width: 18rem;" onclick="processClick('${person.id}')" id="${person.id}">
    <img class="card-img-top" src="${person.imageURL}" alt="${person.name}">
    <div class="card-body bg-info text-white">
      <p class="card-text">${person.name}, ${person.age}</p>
      <p class="card-text">${person.location}</p>
      <a href="${person.twitter}" alt="${person.name}"><img src="link.png" class="img-fluid link"></a>
    </div>
  </div>
  `
  return template
}

function getProfileTemplate(person) {
  var template = `
  <div class="row" id="${person.id}" onclick="getProfileTemplateClick('${person.id}')" id="${person.id}">
    <div class="col-12 col-sm-12 col-md-5">
        <img class="large" onclick="processClick('${person.id}')" src="${person.imageURL}" alt="${person.name}"  >
    </div>
    <div class="col-12 col-sm-12 col-md-7">
      <h2>
        ${person.name}
      </h2>
          <h4>
            ${person.age}, ${person.location}
          </h4>
      <div id="all" class="col-md-11 col-12">
          <p id="paragraph">
            ${person.text}
          </p>
        <div id="before">
          <div>
            ${person.question}
          </div>
          <div>
            <button class="btn success button" onClick="buttonAnswer1('${person.id}')" id="button1">${person.option1.label}</button>  <button class="btn success button"  onClick="buttonAnswer2('${person.id}')" id="button2">${person.option2.label}</button>
          </div>
        </div>
          <button class="btn success back hand" onclick="goBack()"><h5>BACK</h5></button>
          <div class="row" id="chartContainer">
          </div>
      </div>

  </div>

  `
  return template
}

function buttonAnswer1(personId) {
  document.getElementById('chartContainer').style.display = "inline";
  document.getElementById('before').style.display = "none";
  youth_data[personId].option1.count = youth_data[personId].option1.count + 1
  yes = youth_data[personId].option1.count;
  updateChart()
}
function buttonAnswer2(personId) {
  document.getElementById('chartContainer').style.display = "inline";
  document.getElementById('before').style.display = "none";
  youth_data[personId].option2.count = youth_data[personId].option2.count + 1
  no = youth_data[personId].option2.count;
  updateChart()


}

function updateChart(){
  chart.options.data[0].dataPoints[0].y = yes
  chart.options.data[0].dataPoints[1].y = no
  chart.render();
}


window.onload = function () {
	chart.render();
}

function goBack() {
  document.getElementById('grid').hidden = false
  document.getElementById('profile').hidden = true
  documnet.getElementById('chartContainer').hidden = true;
}



//
document.getElementById("person-1").innerHTML = getGridTemplate(youth_data.Celeste_Aguilar)

document.getElementById("person-2").innerHTML = getGridTemplate(youth_data.Hamdia_Ahmed)

document.getElementById("person-3").innerHTML = getGridTemplate(youth_data.Ziad_Ahmed)

document.getElementById("person-4").innerHTML = getGridTemplate(youth_data.Santos_Amaya_Guevera)

document.getElementById("person-5").innerHTML = getGridTemplate(youth_data.Anya_Andrews)

document.getElementById("person-6").innerHTML = getGridTemplate(youth_data.Seun_Babalola)

document.getElementById("person-7").innerHTML = getGridTemplate(youth_data.Mari_Copeny)

document.getElementById("person-8").innerHTML = getGridTemplate(youth_data.Grace_Dolan_Sandrino)

document.getElementById("person-9").innerHTML = getGridTemplate(youth_data.Katie_Eder)

document.getElementById("person-10").innerHTML = getGridTemplate(youth_data.Nikhil_Goyal)

document.getElementById("person-11").innerHTML = getGridTemplate(youth_data.Shawn_Goyal)

document.getElementById("person-12").innerHTML = getGridTemplate(youth_data.Merrit_Jones)

document.getElementById("person-13").innerHTML = getGridTemplate(youth_data.Brittany_King)

document.getElementById("person-14").innerHTML = getGridTemplate(youth_data.Clifton_Kinnie)

document.getElementById("person-15").innerHTML = getGridTemplate(youth_data.Tiffany_Dena_Loftin)

document.getElementById("person-16").innerHTML = getGridTemplate(youth_data.Sara_Mora)

document.getElementById("person-17").innerHTML = getGridTemplate(youth_data.RaeVen_Ridgell)

document.getElementById("person-18").innerHTML = getGridTemplate(youth_data.Courtney_Roberts)

document.getElementById("person-19").innerHTML = getGridTemplate(youth_data.Sojourner_Rouco_Crenshaw)

document.getElementById("person-20").innerHTML = getGridTemplate(youth_data.Giavonni_Williams)
