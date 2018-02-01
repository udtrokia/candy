package main

import (
	"github.com/go-pg/pg"
)


type Info struct {
	Id int64
	Candies int
	Followers int
}

func insert( info *Info, invater int64 ) {
	// connect db
	db := pg.Connect(&pg.Options{
		User: "mercurio",
		Password: "181058,",
		Database: "candy",
	})
	
	// select
	_id := Info{ Id: info.Id }
	err := db.Select(&_id)
	if err != nil {
		panic(err)
		return
	}
	
	// insert
	err = db.Insert(&info)
	if err != nil { panic(err) }
	update(&Info{Id:invater})
	//close db
	err = db.Close()
	if err != nil { panic(err) }

	return
}

func update ( info *Info ) {
	
	// connect db
	db := pg.Connect(&pg.Options{
		User: "mercurio",
		Password: "181058,",
		Database: "candy",
	})

	// update 
	user := &Info{ Id: info.Id }
	user.Followers += 1
	user.Candies += 20 
	err := db.Update(user)
	if err != nil { panic(err) }

	//close db
	err = db.Close()
	if err != nil { panic(err) }

	return
}
