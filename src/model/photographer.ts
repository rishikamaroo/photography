import { IPhotographer } from "../type";

const list: IPhotographer[] = [];

export function getAll(): IPhotographer[] | null {
  return [];
}

export function get(id?: number): IPhotographer | null {
  return list[0];
}

export function getByEvent(): IPhotographer[] | null {
  return null;
}

export function postPhotographer(text: IPhotographer): String | null {
  console.log("postPhotographer " + JSON.stringify(text));
  try {
    list.push(text);
    // const firstName = text.first_name;
    // if(firstName == "Lorenzo") {
    //   return null;
    // }
  
    // const lastname = text.last_name;
    // const username = text.username;
    // const email = text.email;
    // console.log("firstName: " + firstName);
    // console.log("lastname: " + lastname);
    // console.log("username: " + username);
    // console.log("email: " + email);
    return "4536727";
  } catch(err: any) {
    console.log(err+"kjeinu");
    return "oops!";
  }
}
// Mongo, Mongoose NoSql
// Collection based db
// not ties to schema

// Sql, Postgres 
// observability 