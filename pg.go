package main

import (
	"github.com/go-pg/pg"
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
	// connect db
	db := pg.Connect(&pg.Options{
		User: "mercurio",
		Password: "181058,",
		Database: "candy",
	})
	// insert
	err := db.Insert(user)
	if err != nil {
		return  &Issue{ Loc: "exist" }
	}
	
	//close db
	err = db.Close()
	if err != nil { panic(err) }
	return  &Issue{ Loc : "Inset New User Success!"}
}

func update ( user *Users ) {
	// connect db
	db := pg.Connect(&pg.Options{
		User: "mercurio",
		Password: "181058,",
		Database: "candy",
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
