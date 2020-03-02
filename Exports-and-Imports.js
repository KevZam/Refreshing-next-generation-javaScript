// person.js
// Whatever we export here will be the default export, meaning that we can name it whatever we want
// wherever we require it. The export is by 'default' the single thing we are exporting out here.
const person = {
  name: "Max"
};

export default person;

// ------------------------------------------------------------------------------------------------------

// utility.js
// Here we export specific data from our utility.js. In this case when we import the data elsewhere, we
// have to use these exact names inside {}. These are known as named exports. Since neither of these is the
// default export, we have to specify what we are importing in the app.js
export const clean = () => {};
export const baseData = 10;

// ------------------------------------------------------------------------------------------------------

//app.js
import person from "./person.js";
import prs from "./person.js";

import { baseData } from "./utility.js";
import { clean } from "./utility.js";

// You can also use an alias by using the 'as' keyword inside the {}
import { clean as Clean } from "./utility.js";

// Finally, you can import all of the exports from the utility.js and create a bundled object that
// you can call the variables you exported
import * as bundled from "./utility.js";
