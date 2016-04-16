
NEXGT STEPS
how to make the skills into the filters.
    it looks like i will be using a data-presentation attribute and then that css thing where you can use any attribute and its value. data-presentation="emphasized" data-presentation="deemphasized" data-presentation="neutral" (Ironically the skills vars I set up are basically gone by the time the HTML is created.??) But I think if I include somewhere a js function that I then operate on with other js, i.e. "onClick = filter(%data%)" or whatever that correctg syntax is here exists in one file -- would that be right in the index or helper?? woudl it be aprt of the style?? where do you attach the "onClick" designation to an elemlent? And  anyway then in the main js file - which is currently in index but I would like to pull into a separate file I would think unless that's too ambitious -- I would define that filter functinon, .e. "var filter = function(skill) {//code to change class of all work entries and project entries if they have a duty that has that skill in relateddSkills}

then you can start setting up the interactivity -- make sure you can get the skills to select the jobs and projects - use some
simple styling to make it obvious.

then after that you can actually make the styling what you want it to be.

but remember to design for mobile first!


NEED TO CHECK d3 and try my other ideas for customization
  ALSO : assignments for final project are 1) Encapsulate all the display functionality -
  and it looks like I never did it fo reducation -- or even projects??, and
  2) customize. I can look at esxisting js libraries. And I could  make my own stuff too.
  Lots of style stuff to do better.
 BETTER not to have images in the resume?

Grunt and/or gulp, or leave for later?
  add awards/achievements to resume -- expandable? definitely not filterable
  get the funcionality going in terms of selecting-  use a background color for starters
   style the whole thing

/* ideas include pitching myself for up and coming jobs including speech command stuff, able to tackle frontiers */


IDEAS

in bio.dispaly section, can give it either an ID or a data-filter category. Actually ID seems fine. Because what we'll be doing is adding a couple of functions to them when clicked.

So later on in the index we'll:

for skill in bio.skills(skillIndex = 0, skillIndex < length, skillIndex++){
  $(#bio.skill).click( , skillFilter(bio.skill)  , true/false);
  $(#bio.skill).click( , )

In work.display sectino also need to create the duties section.



skillFilter(s){
  $(#at).

Create a filteredIn class, a filteredOut class, a neutral class that appears when you first load the page, and possibly a "none" dsplay option so that you can collapse everything

when you click on one of the skills, that li'l div has to have two things happen when you click. it has to run a function that operates on all the work duties with matching relatedSkills (And part of that function will be that jobs without any filteredIn duties will themslevs be filteredOut. and jobs with filiteredIn duties will be filteredIn. so we'll need the jobs to take on ((bubb;e??)) the same style as their duty components.). Secondly, it has to shrink the header similarly to how I did it in the other prjoect.

Show all should also shrink header. Collapse all should return header to a larger thing.