package main

import (
	"github.com/go-pg/pg"
	"io/ioutil"
	"gopkg.in/yaml.v2"
)


type Users struct {
	Id string
	Candies int
	Followers int
	Country_code string
}

type Issue struct {
	Loc string
}

func insert ( user *Users, invater string ) *Issue {
	// config
	c := Config{}
	y,_ := ioutil.ReadFile("./config.yaml")
	yaml.Unmarshal(y, &c)
	
	// connect db
	db := pg.Connect(&pg.Options{
		User: c.User,
		Password: c.Password,
		Database: c.Database,
	})
	
	// insert
	err := db.Insert(user)
	if err != nil {
		return  &Issue{ Loc: "exist" }
	}
	
	//close db
	err = db.Close()
	if err != nil { panic(err) }
	return  &Issue{ Loc : "Insert New User Success!"}
}

func update ( user *Users ) {
	// config
	c := Config{}
	y,_ := ioutil.ReadFile("./config.yaml")
	yaml.Unmarshal(y, &c)
	
	// connect db
	db := pg.Connect(&pg.Options{
		User: c.User,
		Password: c.Password,
		Database: c.Database,
	})

	// update 
	user.Followers += 1
	user.Candies += 20 
	err := db.Update(&user)
	if err != nil { panic(err) }

	//close db
	err = db.Close()
	if err != nil { panic(err) }

	return
}
