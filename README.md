Exercise for Front End Developer Candidates
===========================================

Hi and thanks for your interest in joining the team!

We've created an exercise with the goal of getting a feel for your favorite front end tools, workflow, methodologies and experience. Our intention is that this exercise will not take up more than a few hours of your time.

> Asking questions is part of the job - feel free to ask us for any clarification beyond this readme!

Good luck and have fun!

Definition of done
-------------------

We want to develop a small checklist component, which renders with a visual design based on [this invision spec](https://projects.invisionapp.com/share/7KFOTM8AFQ2#/screens/277498035).

Acceptance criteria
-------------------

1. On page load, the checklist of items should be displayed.
1. When the user selects a checkbox, the item should appear crossed out, as shown in the design.
1. When the user selects a checkbox, holds down the `SHIFT` key and selects a checkbox further down the list, every item in between should also be selected.
1. The un/check all button should either check or uncheck all items.
1. As the viewport changes (i.e. mobile->tablet->desktop sizes), we should see some responsive considerations (we don't have anything specific in mind, so we'll leave this up to you!).

Implementation details
----------------------

:heavy_check_mark: You can set your local environment up with any dev server/dependency manager/task runner that you want.

:heavy_check_mark: You can use any library/framework/plugin you want.

:heavy_check_mark: You can write html/js/css or in languages which compile into html/js/css.

:heavy_check_mark: Due to the limited time, develop just for the latest version of Google Chrome.

Getting started
---------------

1. Create a new repository at `<your-github-username>/front-end-exercise` (see [github docs](https://help.github.com/articles/creating-a-new-repository/) -- you don't need to initialize that repo with a readme or anything).

1. Clone this `massgov/front-end-exercise` repository (see [github docs](https://help.github.com/articles/cloning-a-repository/)).

1. Add your repository (from Step 1: `<your-github-username>/front-end-exercise`) as a new remote (see [github docs](https://help.github.com/articles/adding-a-remote/)).

1. Now you're ready to begin work! `cd front-end-exercise`

1. Please feel free to use any tools you're comfortable with & you believe are appropriate when setting up your local environment for this project.

1. The design spec is created in [invision](https://support.invisionapp.com/hc/en-us/articles/115000638763).  You don't need to install it or even create an account.  

> We've left some comments in the document, see [the invision docs](https://support.invisionapp.com/hc/en-us/articles/115000634946) for help looking at those comments.  (Let us know if we can help here!)

Submission / demo
-----------------

When you're all set, [push your branch up](https://help.github.com/articles/pushing-to-a-remote/) to your remote repository.

When we talk in the future, folks from our team will want to pull your branch down from your repository and be able to run the app locally.

Nice-to-haves
-------------
> This is where you have fun - think one of these features makes sense? Try it!

- you can develop this component in a way that it (or pieces of it) could be reused elsewhere in our project
- you can connect with an "external" data source to load the todo items and check
- you can maintain the state of checked items when we reload the page
- you can add any considerations for cross/legacy browser support
- you can add considerations for accessibility - how would a screen-reader interact with this?
