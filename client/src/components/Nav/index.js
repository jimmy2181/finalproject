import React from "react";

function Nav() {
  return (
    <nav class="demo-navigation mdl-navigation mdl-color--blue-grey-800">
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--amber-400 material-icons" role="presentation">home</i>Home</a>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--amber-400 material-icons" role="presentation">person</i>Your Stocks</a>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--amber-400 material-icons" role="presentation">trending_up</i>Stock Market</a>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--amber-400 material-icons" role="presentation">pie_chart</i>Budget</a>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--amber-400 material-icons" role="presentation">verified_user</i>Log in / Log out</a>


         
        <div class="mdl-layout-spacer"></div>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--amber-400 material-icons" role="presentation">help_outline</i><span class="visuallyhidden">Help</span></a>
      </nav>
  );
}

export default Nav;
