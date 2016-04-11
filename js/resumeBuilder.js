/* Set up skills-at-a-glance as a set of variables so that they can be used as filter buttons
/* to easily select and view related jobs and projects */

var video = "video and media production";
var lead = "leadership";
var web = "web development";
var write = "writing & journalism";
var comms = "other communication";
var collab = "collaboration";
var create = "creativity & innovation";
var perform = "acting, voiceover, performance";
var tech = "specific technology platforms";
/* including social media and writing under comms */
/* improvisation is considered  collab , create , and perform */

var bio = {
    "name" : "Benson Gardner",
    "role" : "Front-End Developer, Multimedia Producer, Project Manager, Communicator",
    "contacts" : {
        "mobile" : "608-556-4846",
        "email" : "bensongardner@yahoo.com",
        "github" : "https://github.com/BensonGardner",
        "twitter" : "http://twitter.com/bensongardner",
        "linkedin" : "https://www.linkedin.com/in/benson-gardner-7009859",
        "location" : "Madison, Wisconsin, USA"
    },
    "picture" : "images/bg-face-side.jpg",
    "message" : "Multi-skilled professional at the intersection of communication & technology, analysis & creativity, information & joy",
    "skills" : [web, video, lead, create, collab, write, comms, perform]
};

var work = {
    "jobs" : {
        "dpi" : {
            "position" : "Multimedia Publications Editor",
            "employer" : "Wisconsin Department of Public Instruction",
            "city" : "Madison, Wisconsin, USA",
            "years" : "2007 -",
            "description" : "I edit and manage certain communications from the state superintendent of public instruction. I am the front-end developer in the Office of the State Superintendent. I also coordinate multimedia production at the agency. That includes leading teams of producers in creating high quality video pieces in a variety of styles. I create guidelines for agency staff and consult and train to ensure our most important videos are high quailty. I also led the effort to create a pocliy to guide the organization's social media use, back when that was a really new thing."
        },
        "indie" : {
            "position" : "Independent Media Producer",
            "city" : "Madison, Wisconsin, USA",
            "years" : "1996 -",
            "description" : "I've led teams to create animated explainers, history-focused reality television, and sketch comedy."
        },
        "uwp" : {
            "position" : "Publicity Manager",
            "employer" : "University of Wisconsin Press",
            "city" : "Madison, Wisconsin, USA",
            "years" : "2004 - 2007",
            "description" : "I worked at a fast pace with a group of wonderful interns to get our books some attention when they hit the market."
        },
        "wpr" : {
            "position" : "News Reporter/Producer",
            "employer" : "Wisconsin Public Radio",
            "city" : "Madison, Wisconsin, USA",
            "years" : "1997 - 2004",
            "description" : "I got to use my own journalistic judgment, people skills, writing, audio editing, and vocal performance abilities. I won a number of awards for my stories. I served for a few years as Legal Affairs Reporter and filled in as State Capitol Reporter. I spent a year as a talk show producer as well."
        },
        "wpt" : {
            "position" : "Associate Television Producer / Web Content Producer / Production Assistant",
            "employer" : "Wisconsin Public Television",
            "city" : "Madison, Wisconsin, USA",
            "years" : "2001 - 2004",
            "description" : "Created TV segments in historical documentary style and was part of a content team for portalwisconsin.org."
        },
        "improv" : {
            "position" : "Comedy Improviser",
            "employer" : "ComedySportz-Madison, Monkey Business Institute",
            "city" : "Madison, Wisconsin, USA",
            "years" : "1996 - 2002, 2008 - 2012",
            "description" : "Improvisation means giving up control while looking like you aren't."
        }
    }
};

var education = {
    "schools": [
        {
            "name" : "University of Chicago",
            "location" : "Chicago, Illinois, USA",
            "degree" : "B.A.",
            "major" : "Anthropology",
            "dates" : "1991 - 1995",
            "notable" : ["Cum laude. National Merit Scholar."]
        },
        {
            "name" : "Menomonie High School",
            "location" : "Menomonie, Wisconsin, USA",
            "dates" : "1987- 1991",
            "notable" : ["Top 3 percent of class. All-State Scholar. National Honors Society."]
        }
    ],
    "onlineCourses": [
        {
            "title" : "Front-End Developer Nanodegree",
            "school" : "Udacity.com",
            "dates" : "2016",
            "URL" : "http://udacity.com"
        }
    ],
    "otherTraining": [
        {
            "name" : "Journalism"
        },
        {
            "name" : "Grant-writing"
        }
    ]
};

var projects = {
    "projectEntries" : [
        {
            "name" : "Example Animated Explainer: Social Entrepeneurship and Kids",
            "image" : "images/ceoot-560.jpg",
            "link" : "http://youtube.com/watch?v=JZEZHcrl-2Q",
            "challenge" : "Create a professional, compelling video message for an educational nonprofit",
            "role" : "Assemble and lead team, write script in consultation with client, direct video, voice narration",
            "position" : "Independent Media Producer"
        },
        {
            "name" : "Wisconsin Department of Public Instruction Video Program",
            "image" : "images/dpiyt-560.jpg",
            "link" : "http://wilife.org/no-obstacles-for-parkour-athletes",
            "challenge" : "Create and maintain extensive, effective video production for a state agency and an elected official",
            "role" : "Coordinate all production in the agency, direct high-profile videos, shoot and edit video, write and voice narration",
            "position" : "Multimedia Publications Editor"
        },
        {
            "name" : "Parkour Profile",
            "image" : "images/parkour-560.jpg",
            "link" : "http://wilife.org/no-obstacles-for-parkour-athletes",
            "challenge" : "Find an interesting person and bring their story to life for broadcast on Wisconsin Public Television",
            "role" : "Writer-Producer",
            "position" : "Independent Media Producer"
        },
        {
            "name" : "Online Portfolio",
            "image" : "images/bg-logo.svg",
            "link" : "placeholder",
            "challenge" : "Create a responsive, engaging site to display my work",
            "role" : "Developer",
            "position" : "Front-End Developer"
        },
        {
            "name" : "Historical Markers",
            "image" : "placeholder",
            "link" : "placeholder",
            "client" : "",
            "challenge" : "Research, write, and choose images for 12 engaging signs about periods of Madison history chosen by the city's Sesquicentennial Commission",
            "role" : "Writer / Photo Researcher",
            "position" : "Independent Media Producer"
        }
    ]
};

var duties = [
    {
        "name" : "Manage organization's video program",
        "relatedSkills" : [lead, video],
        "relatedJobs" : [work.dpi]
    },
    {
        "name" : "Recruit, hire, oversee staff",
        "relatedSkills" : [lead],
        "relatedJobs" : [work.dpi, work.uwp]
    },
    {
        "name" : "Manage state superintendent’s electronic newsletter, DPI-ConnectEd",
        "relatedSkills" : [write, collab, web, create],
        "relatedJobs" : [work.dpi]
    },
    {
        "name" : "Write news releases, articles, and other materials",
        "relatedSkills" : [write, collab],
        "relatedJobs" : [work.dpi, work.uwp, work.indie]
    },
    {
        "name" : "Create video pieces",
        "relatedSkills" : [video, collab, perform, create, write],
        "relatedJobs" : [work.dpi, work.wpt, work.indie]
    },
    {
        "name" : "Record narration and voiceover",
        "relatedSkills" : [video, perform],
        "relatedJobs" : [work.dpi, work.wpt, work.indie]
    },
    {
        "name" : "Produce radio news segments for statewide broadcast",
        "relatedSkills" : [video, perform, write],
        "relatedJobs" : [work.wpr]
    },
    {
        "name" : "Comic acting",
        "relatedSkills" : [perform],
        "relatedJobs" : [work.indie, work.improv]
    },
    {
        "name" : "Craft and oversee wording and visual presentation of agency messages for videos",
        "relatedSkills" : [lead, write, comms, video, create],
        "relatedJobs" : [work.dpi]
    },
    {
        "name" : "Draft quotations and talking points",
        "relatedSkills" : [write, comms],
        "relatedJobs" : [work.dpi]
    },
    {
        "name" : "Lead production teams",
        "relatedSkills" : [lead, video, collab, create],
        "relatedJobs" : [work.dpi, work.indie]
    },
    {
        "name" : "Plan, execute communications campaigns",
        "relatedSkills" : [lead, collab, create, video, web, write, comms],
        "relatedJobs" : [work.dpi]
    },
    {
        "name" : "Assemble, facilitate workgroups and committees",
        "relatedSkills" : [lead, collab],
        "relatedJobs" : [work.dpi, work.indie]
    },
    {
        "name" : "Serve as lead author for agency policy on social media",
        "relatedSkills" : [lead, comms, web, create],
        "relatedJobs" : [work.dpi]
    },
    {
        "name" : "Advise on social media, video, and emerging communications technologies",
        "relatedSkills" : [lead, comms, create, web, collab],
        "relatedJobs" : [work.dpi]
    },
    {
        "name" : "Communicate via social media",
        "relatedSkills" : [comms],
        "relatedJobs" : [work.uwp]
    },
    {
        "name" : "Manage content for state superintendent’s and other areas of agency website",
        "relatedSkills" : [lead, web, write, collab],
        "relatedJobs" : [work.dpi]
    },
    {
        "name" : "Capture video, audio, still photographs",
        "relatedSkills" : [video, comms],
        "relatedJobs" : [work.dpi, work.indie, work.wpr]
    },
    {
        "name" : "Serve as writer, photo researcher in creation of historical markers for permanent outdoor installation",
        "relatedSkills" : [write, comms, collab],
        "relatedJobs" : [work.indie]
    },
    {
        "name" : "Edit video using Adobe Creative Cloud (e.g., Premiere, AfterEffects, Audition)",
        "relatedSkills" : [video, tech],
        "relatedJobs" : [work.dpi]
    },
    {
        "name" : "Manage and edit web content using HTML, CSS, Adobe Dreamweaver, Drupal, other content management, FTP",
        "relatedSkills" : [lead, write, web, tech],
        "relatedJobs" : [work.dpi, work.wpr, work.wpt]
    },
    {
        "name" : "Assist in media relations",
        "relatedSkills" : [comms],
        "relatedJobs" : [work.dpi]
    },
    {
        "name" : "Oversee publicity strategy",
        "relatedSkills" : [comms, lead],
        "relatedJobs" : [work.uwp]
    },
    {
        "name" : "Work with contacts to secure print, broadcast, and online coverage",
        "relatedSkills" : [comms, collab],
        "relatedJobs" : [work.uwp, work.indie]
    },
    {
        "name" : "Create publicity materials",
        "relatedSkills" : [write],
        "relatedJobs" : [work.uwp]
    },
        {
        "name" : "Research historical and contemporary topics",
        "relatedSkills" : [write],
        "relatedJobs" : [work.indie, work.wpt]
    },
    {
        "name" : "Research contemporary topics",
        "relatedSkills" : [write],
        "relatedJobs" : [work.wpr]
    },
    {
        "name" : "Write informative, engaging, and/or entertaining scripts",
        "relatedSkills" : [write, video],
        "relatedJobs" : [work.indie, work.dpi, work.wpt]
    },
    {
        "name" : "Establish lighthearted, enthusiastic tone in workgroup and on screen",
        "relatedSkills" : [comms, lead],
        "relatedJobs" : [work.indie]
    },
    {
        "name" : "Develop and execute concepts for comedy and nonfiction television",
        "relatedSkills" : [create, collab, video],
        "relatedJobs" : [work.indie]
    },
    {
        "name" : "Arrange and publicize screenings",
        "relatedSkills" : [comms, lead],
        "relatedJobs" : [work.indie]
    },
    {
        "name" : "Edit video using FinalCut Pro, Vegas Video",
        "relatedSkills" : [video, tech],
        "relatedJobs" : [work.indie]
    },
    {
        "name" : "Arrange and conduct interviews with experts and other external sources",
        "relatedSkills" : [video, collab],
        "relatedJobs" : [work.indie, work.dpi, work.wpt]
    },
    {
        "name" : "Arrange and conduct interviews with elected officials, legislators, and other external sources",
        "relatedSkills" : [video, collab],
        "relatedJobs" : [work.wpr]
    },
    {
        "name" : "Serve on talk radio show production team",
        "relatedSkills" : [video, collab],
        "relatedJobs" : [work.wpr]
    },
    {
        "name" : "Produce non-fiction television segments for statewide broadcast",
        "relatedSkills" : [video, collab, write],
        "relatedJobs" : [work.wpt]
    },
        {
        "name" : "Instigate laughter: great, debilitating laughter",
        "relatedSkills" : [perform, comms],
        "relatedJobs" : [work.improv]
    },
    {
        "name" : "Engage live audiences",
        "relatedSkills" : [comms, lead],
        "relatedJobs" : [work.improv]
    },
    {
        "name" : "Improvise effectively",
        "relatedSkills" : [comms, perform, create],
        "relatedJobs" : [work.improv]
    },
    {
        "name" : "Rely on trust, teamwork to solve tough problems",
        "relatedSkills" : [collab, lead],
        "relatedJobs" : [work.improv]
    },
    {
        "name" : "Endure a governor deliberately banging his elbows on the microphone table as he answered a question he apparently didn't want me to ask",
        "relatedSkills" : [],
        "relatedJobs" : [work.wpr]
    },
    {
        "name" : "Experiment with some new platform called Facebook",
        "relatedSkills" : [create, comms],
        "relatedJobs" : [work.uwp]
    },
    {
        "name" : "Develop an unexpected fervor for Finland",
        "relatedSkills" : [],
        "relatedJobs" : [work.wpt]
    },
    {
        "name" : "Hide a few Easter eggs, like this one, in my online resume",
        "relatedSkills" : [web],
        "relatedJobs" : [work.indie]
    }
];

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data" , bio.contacts.twitter);
var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
