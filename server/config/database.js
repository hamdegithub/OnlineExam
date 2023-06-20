
const mysql = require("mysql");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "group",
  connectionLimit: 10,

});
let adminRegistration = `CREATE TABLE if not exists adminregistration(
    admin_id int auto_increment,
    admin_name varchar(255) not null,
    admin_email varchar(255) not null,
    admin_password varchar(255) not null,
    PRIMARY KEY (admin_id),
    UNIQUE KEY (admin_name)
    )`;
let adminProfile = `CREATE TABLE if not exists adminprofile(
    admin_profile_id int auto_increment,
    admin_id int not null,
    first_name varchar(255) not null,
    last_name varchar(255) not null,        
    PRIMARY KEY (admin_profile_id),
    FOREIGN KEY (admin_id) REFERENCES adminregistration(admin_id)
)`;
let registration = `CREATE TABLE if not exists registration(
    user_id int auto_increment,
    user_name varchar(255) not null,
    user_email varchar(255) not null,
    user_password varchar(255) not null,
    PRIMARY KEY (user_id),
    UNIQUE KEY (user_name)
    )`;
let profile = `CREATE TABLE if not exists profile(
    user_profile_id int auto_increment,
    user_id int not null,
    first_name varchar(255) not null,
    last_name varchar(255) not null,        
    PRIMARY KEY (user_profile_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;
let pastquestion = `CREATE TABLE if not exists pastquestion(
    pastquestion_id int auto_increment,
    year varchar(200)not null,
    subject varchar(65535) not null,
    qn varchar(200) not null,
    title varchar(200) not null,
    a varchar(200) not null,
    b varchar(65535) not null,
    c varchar(200) not null,
    d varchar(65535) not null,
    answer varchar(200) not null,
    explen varchar(200) ,
    time DateTime not null,
    PRIMARY KEY (pastquestion_id)
)`;
let biology = `CREATE TABLE if not exists biology(
    onlinequestion_id int auto_increment,
    title varchar(200) not null,
    a varchar(200) not null,
    b varchar(65535) not null,
    c varchar(200) not null,
    d varchar(65535) not null,
    answer varchar(200) not null,
    time DateTime not null,
    PRIMARY KEY (onlinequestion_id)
)`;
let maths = `CREATE TABLE if not exists maths(
    onlinequestion_id int auto_increment,
    title varchar(200) not null,
    a varchar(200) not null,
    b varchar(65535) not null,
    c varchar(200) not null,
    d varchar(65535) not null,
    answer varchar(200) not null,
    time DateTime not null,
    PRIMARY KEY (onlinequestion_id)
)`;
let physics = `CREATE TABLE if not exists physics(
    onlinequestion_id int auto_increment,
    title varchar(200) not null,
    a varchar(200) not null,
    b varchar(65535) not null,
    c varchar(200) not null,
    d varchar(65535) not null,
    answer varchar(200) not null,
    time DateTime not null,
    PRIMARY KEY (onlinequestion_id)
)`;
let chemistry= `CREATE TABLE if not exists chemistry(
    onlinequestion_id int auto_increment,
    title varchar(200) not null,
    a varchar(200) not null,
    b varchar(65535) not null,
    c varchar(200) not null,
    d varchar(65535) not null,
    answer varchar(200) not null,
    time DateTime not null,
    PRIMARY KEY (onlinequestion_id)
)`;
let social = `CREATE TABLE if not exists social(
    onlinequestion_id int auto_increment,
    title varchar(200) not null,
    a varchar(200) not null,
    b varchar(65535) not null,
    c varchar(200) not null,
    d varchar(65535) not null,
    answer varchar(200) not null,
    time DateTime not null,
    PRIMARY KEY (onlinequestion_id)
)`;
let civics = `CREATE TABLE if not exists civics(
    onlinequestion_id int auto_increment,
    title varchar(200) not null,
    a varchar(200) not null,
    b varchar(65535) not null,
    c varchar(200) not null,
    d varchar(65535) not null,
    answer varchar(200) not null,
    time DateTime not null,
    PRIMARY KEY (onlinequestion_id)
)`;
let oromo = `CREATE TABLE if not exists oromo(
    onlinequestion_id int auto_increment,
    title varchar(200) not null,
    a varchar(200) not null,
    b varchar(65535) not null,
    c varchar(200) not null,
    d varchar(65535) not null,
    answer varchar(200) not null,
    time DateTime not null,
    PRIMARY KEY (onlinequestion_id)
)`;
let amharic = `CREATE TABLE if not exists amharic(
    onlinequestion_id int auto_increment,
    title varchar(200) not null,
    a varchar(200) not null,
    b varchar(65535) not null,
    c varchar(200) not null,
    d varchar(65535) not null,
    answer varchar(200) not null,
    time DateTime not null,
    PRIMARY KEY (onlinequestion_id)
)`;
let english = `CREATE TABLE if not exists english(
    onlinequestion_id int auto_increment,
    title varchar(200) not null,
    a varchar(200) not null,
    b varchar(65535) not null,
    c varchar(200) not null,
    d varchar(65535) not null,
    answer varchar(200) not null,
    time DateTime not null,
    PRIMARY KEY (onlinequestion_id)
)`;
let question = `CREATE TABLE if not exists question(
    question_id int auto_increment,
    user_id int not null,
    title varchar(200) not null,
    question varchar(65535) not null,
    time DateTime not null,
    PRIMARY KEY (question_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;
let answer = `CREATE TABLE if not exists answer(
    answer_id int auto_increment,
    user_id int not null,
    question_id int not null,
    answer varchar(65535) not null,
    time DateTime not null,
    PRIMARY KEY (answer_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id),
     FOREIGN KEY (question_id) REFERENCES question(question_id)
)`;


pool.query(adminRegistration, (err, results) => {
  if (err) throw err;
  console.log("adminregistration table created");
});
pool.query(adminProfile, (err, results) => {
  if (err) throw err;
  console.log("adminProfile table created");
});
pool.query(registration, (err, results) => {
  if (err) throw err;
  console.log("registration table created");
});
pool.query(profile, (err, results) => {
  if (err) throw err;
  console.log("profile table created");
});
pool.query(pastquestion , (err, results) => {
  if (err) throw err;
  console.log("adminquestion  table created");
});
pool.query(biology , (err, results) => {
  if (err) throw err;
  console.log("biology table created");
});
pool.query(maths , (err, results) => {
  if (err) throw err;
  console.log("maths table created");
});
pool.query(physics , (err, results) => {
  if (err) throw err;
  console.log("physics table created");
});
pool.query(chemistry , (err, results) => {
  if (err) throw err;
  console.log("chemistry table created");
});
pool.query(social , (err, results) => {
  if (err) throw err;
  console.log("social table created");
});
pool.query(oromo , (err, results) => {
  if (err) throw err;
  console.log("oromo table created");
});
pool.query(civics , (err, results) => {
  if (err) throw err;
  console.log("civics table created");
});
pool.query(amharic , (err, results) => {
  if (err) throw err;
  console.log("amharic table created");
});
pool.query(english , (err, results) => {
  if (err) throw err;
  console.log("english table created");
});
pool.query(question, (err, results) => {
  if (err) throw err;
  console.log("question table created");
});
pool.query(answer, (err, results) => {
  if (err) throw err;
  console.log("answer table created");
});

module.exports = pool;

