
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Seungyeon Lee",
  title: "LEE SEUNG-YEON",
  subTitle: emoji("1 년 차 주니어 개발자로 Java, Swift, Unity C#, OpenCV, Git 등의 기술을 사용하여 프로덕션 서비스 프로젝트에 참여한 경험이 있습니다. 이 경험을 바탕으로 기존에 작성 되어있던 코드를 이해하고 팀원들 간의 체계를 신속 정확하게 배울 수 있는 역량을 성장시켜 왔습니다. 이 역량을 발전시킬 수 있도록 처음 마주하는 일이라도 두려워하지 않고 도전하겠습니다."),
  resumeLink: "https://drive.google.com/file/d/1I1LrgXdike4jN5m3esKYZ0hxuLEfp8Sv/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Seungyeon-Lee",
  gmail: "yeondiary@gmail.com",
  instagram: "https://www.instagram.com/soybean.milk/",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "교내 프로젝트와, 실무 프로젝트를 포함하여 사용한 기술들은 다음과 같습니다.",
  skills: [
    emoji("모바일 클라이언트 : Java8, Android Studio, Swift5"),
    emoji("게임 클라이언트 : Unity3d C#"),
    emoji("웹 클라이언트 : Vue.js, CSS")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C",
      deviconName: "devicon-c-plain"
    },
    {
      skillName: "C++",
      deviconName: "devicon-cplusplus-plain"
    },
    {
      skillName: "C#",
      deviconName: "devicon-csharp-plain"
    },
    {
      skillName: "Visual Studio",
      deviconName: "devicon-visualstudio-plain"
    },
    {
      skillName: "java",
      deviconName: "fab fa-java"
    },
    {
      skillName: "android",
      deviconName: "devicon-android-plain"
    },
    {
      skillName: "swift",
      deviconName: "fab fa-swift"
    },
    {
      skillName: "npm",
      deviconName: "fab fa-npm"
    },
    {
      skillName: "css",
      deviconName: "fab fa-css3-alt"
    },
    {
      skillName: "vue.js",
      deviconName: "fab fa-vuejs"
    },
    {
      skillName: "sql-database",
      deviconName: "fas fa-database"
    },
    {
      skillName: "python",
      deviconName: "fab fa-python"
    },
    {
      skillName: "git",
      deviconName: "fab fa-git"
    }
  ]
};

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Android, iOS Client Developer",  
      company: "(주)아나키",
      companylogo: require("./assets/images/anarchyLogo.png"),
      date: "2018.8 – 2019.10",
      desc: "사원 (인턴 2018.7 – 2018.8)",
      descBullets: [
        "스트리밍 강의 플랫폼 ‘톡강’ 안드로이드, iOS 앱 개발 참여.",
        "유아용 사물인식(OR) 게임 ‘팩토슐레’ lv3 앱 중 칠교놀이 / 연산 / 규칙 / 측정, lv2 연산 개발."
      ]
    },
    {
      role: "Android Client Developer",   
      company: "(주)스윙크",
      companylogo: require("./assets/images/swinkLogo.png"),
      date: "2018.3 – 2018.6",
      desc: "ICT인턴",
      descBullets: [
        "유아용 증강현실(AR) / 인터렉션 게임 ‘누리클래스’ 개발 참여.",
        "‘EBS 어학 FM’ 리소스 관리 및 업로드."
      ]
    }
  ]
};

const projectSection = {

  title: emoji("Projects"),
  subtitle: "지금까지 참여한 실무 프로젝트와 개인 프로젝트의 개요입니다.",

  projectCards: [
    {
      title: "Heartravel",
      date : "2019.12 ~ ing",
      subtitle: "heartravel 쇼핑몰 관리자 페이지 개발",
      image: require("./assets/images/heartravel.png"),
      footerLink: [
        { name: "vue.js" },
        { name: "node.js" },
        { name: "웹 페이지 기획" },
      ]
    },
    {
      title: "OMR Scanner",
      date : "2019.07 ~ 2019.08",
      subtitle: "수능 OMR 모바일 인식 및 채점 시스템 개발",
      image: "https://github.com/Seungyeon-Lee/OMRScanner/raw/master/resources/2.png",
      footerLink: [
        { name: "Android" },
        { name: "Java" },
        { name: "OpenCV" },
        { name: "Unity3d C#" }
      ]
    },
    {
      title: "Fine Art Virtual Exhibition",
      date : "2019.11 ~ 2019.12",
      subtitle: "르네 마그리트의 작품을 3D 모델링하여 만든 모바일 용 VR과 PC용 VR.",
      image: "https://github.com/ameliacode/Fine-Art-Virtual-Exhibition/raw/master/Samples/2.png",
      footerLink: [
        { name: "VR" },
        { name: "Maya" },
        { name: "Google Cardboard" },
        { name: "Unity3d C#" }
      ]
    },
    {
      title: "도형 (SHAPES)",
      subtitle: "인게임 화면의 칠교 모양을 맞춰나가며 다양한 도형을 배우는 300여 개 스테이지의 칠교 게임.",
      date : "2018.8 ~ 2019.8",
      image: require("./assets/images/tangram.png"),
      footerLink: [
        { name: "팩토슐레 lv.3" },
        { name: "OpenCV" },
        { name: "Image Detection" },
        { name: "Unity3d C#" },
      ]
    },
    {
      title: "측정 (MEASUREMENT)",
      date : "2018.8 ~ 2019.8",
      subtitle: "인게임 화면에 표시된 시각을 맞추며 시간의 개념을 배워나가는 시계 게임.",
      image: require("./assets/images/clock.png"),
      footerLink: [
        { name: "팩토슐레 lv.3" },
        { name: "OpenCV" },
        { name: "Image Detection" },
        { name: "Unity3d C#" },
      ]
    },
    {
      title: "수 (NUMBERS)",
      date : "2018.8 ~ 2019.8",
      subtitle: "1부터 50까지 수를 배워나가는 수 게임.",
      image: require("./assets/images/number.png"),
      footerLink: [
        { name: "팩토슐레 lv.3" },
        { name: "OpenCV" },
        { name: "Image Detection" },
        { name: "Unity3d C#" },
      ]
    },
    {
      title: "규칙 (PATTERNS)",
      date : "2018.8 ~ 2019.8",
      subtitle: "다양한 규칙을 찾아내고, 발견해나가는 규칙 게임",
      image: require("./assets/images/shape.png"),
      footerLink: [
        { name: "팩토슐레 lv.3" },
        { name: "OpenCV" },
        { name: "Image Detection" },
        { name: "Unity3d C#" }
      ]
    },
    {
      title: "톡강 Android, iOS",
      date : "2018.7 ~ 2019.8",
      subtitle: "실시간으로 강사와 학생이 소통할 수 있는 스트리밍 강의 플랫폼.",
      image: require("./assets/images/tk.png"),
      footerLink:  [
        { name: "Android" },
        { name: "Java8" },
        { name: "iOS" },
        { name: "Swift5" }
      ]
    },
    {
      title: "아가월드 스마트클래스",
      date : "2018.3 ~ 2018.6",
      subtitle: "유치원에서 아이들과 함깨 사용할 수 있는 디지털 교과서. 5세 인터렉션 게임 12종 개발 참여.",
      image: "http://swink.co.kr/swink/img/portfolio/app/4%EA%B5%90%EC%9C%A1%EC%9A%A9%20%ED%94%8C%EB%9E%AB%ED%8F%BC%20(AR%C2%B7VR)_3~5%EC%84%B8%20%EB%88%84%EB%A6%AC%EA%B3%BC%EC%A0%95%20%EA%B5%90%EC%9C%A1%20%ED%94%8C%EB%9E%AB%ED%8F%BC.png",
      footerLink: [
        { name: "AR / VR" },
        { name: "Unity3d C#" }
      ]
    },
    {
      title: "3D Pacman",
      date : "2017.3 ~ 2017.6",
      subtitle: "기존 2D 오픈 소스 프로젝트를 기반으로 3D 팩맨 게임으로 업데이트",
      image: "https://camo.githubusercontent.com/95c24ca2225945bdc58de41f64eba17f414eb844/687474703a2f2f706f737466696c6573382e6e617665722e6e65742f4d6a41784e7a41324d4452664d5445332f4d4441784e446b324e5451324d5463324e6a51342e67586149464b2d794333724d66525444795f34335a50334b62724b54537871464a4a3574624e7931744538672e386f47373354396149514d546c484954676d4c48704c715154554b6334734f5162724e587930707a664838672e4749462e656b6475643031342f73696e756c2e6769663f747970653d7732",
      footerLink: [
        { name: "3D" },
        { name: "OpenGL" },
        { name: "C++" }
      ]
    }
  ]
};

const achievements = {
  title: "Achievements 🏆",
  subtitle: "현재까지 받은 수상 내역입니다.",
  projects: [
    {
      title : "교내 C 프로젝트 경진대회 금상",
      image: require("./assets/images/achieve1.png"),
      date : "2016.3.9"
    },
    {
      title : "교내 SW경시대회 입상",
      image: require("./assets/images/achieve2.png"),
      date : "2017.11.28"
    },
    {
      title : "교내 SW경시대회 입상",
      image: require("./assets/images/achieve3.png"),
      date : "2017.11.28"
    },
    {
      title : "좋은강의 추천 UCC 공모전 우수상",
      image: require("./assets/images/achieve4.png"),
      date : "2017.12.29"
    },
    {
      title : "ICT 학점연계 인턴십 수료증",
      image: require("./assets/images/achieve5.png"),
      date : "2018.3.9"
    },
    {
      title : "제4회 SW연계전공 융합 프로젝트 발표회 입상",
      image: require("./assets/images/achieve6.png"),
      date : "2019.12.4"
    },
  ]
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Seungyeon-Lee", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};

// Blogs Section
const blogSection = {

  title: "Blogs",
  subtitle: "현재 운영중인 기술 블로그입니다",

  blogs: [
    {
      url: "https://n-square.tistory.com/38",
      title: "REST API란?",
      description: "REST (REpresentational State Transfer) 해석하자면 Representation이 어떠한 것을 나타낸 것(표현)이니 표현적 상태 전송 정도로 보여진다. ..."
    },
    {
      url: "https://n-square.tistory.com/40",
      title: "SSR과 CSR이란?",
      description: "SSR(Server-side Rendering)이란? 기존에 자주 사용하던 방식의 렌더링이다. 클라이언트가 서버에 요청을 하면서 브라우저에 표시된 html을 넘기게 되면 서버는 그 요청에 대한 결과값을 도출하여 만들어진 새로운 html을 클라이언트에 넘겨준다. ..."
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "개인 프로젝트에 대한 질문이 있다면 아래로 연락 부탁드립니다.",
  email_address: "yeondiary@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, workExperiences, projectSection, achievements, openSource, blogSection, contactInfo};
