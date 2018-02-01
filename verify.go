// 
package main

import (
	//	"github.com/kataras/iris"
	"fmt"
	"bytes"	
	"net/http"
	"strings"
	"io/ioutil"
	"github.com/kataras/iris"
	"encoding/json"
)

type Start struct {
	Country_code int
	Phone_number int64
}

type Check struct {
	Invater int64
	Country_code int
	Phone_number int64
	Verification_code string
}

// send code
func start ( ctx iris.Context ) {
	// expected phone_number, country_code	
	_start := &Start{}
	if err := ctx.ReadJSON(_start); err != nil {
		ctx.StatusCode(iris.StatusBadRequest)
		ctx.WriteString(err.Error())
		return
	}


	// combine url	
	var buf bytes.Buffer
	api_key := "fDhZoo8j1WmTDjGp0eyUmzKilmz6dwQ0"	
	basic_url := "https://api.authy.com/protected/json/phones/verification/start?api_key="
	buf.WriteString(basic_url)
	buf.WriteString(api_key)
	url := buf.String()
	
	// make post data
	var data bytes.Buffer
	data.WriteString("via=sms&locale=en&code_length=4&country_code=")
	data.WriteString(string(_start.Country_code))
	data.WriteString("&phone_number=")
	data.WriteString(string(_start.Phone_number))

	// post
	resp, err := http.Post( url, "application/x-www-form-urlencoded", strings.NewReader(data.String()) )
	if err != nil { fmt.Println(err) }
	defer resp.Body.Close()
	
	return 
}

func check ( ctx iris.Context ) {
	// expected country_code, phone_number, verification_code
	_check := &Check{}
	if err := ctx.ReadJSON(_check); err != nil {
		ctx.StatusCode(iris.StatusBadRequest)
		ctx.WriteString(err.Error())
		return
	}
	
	// combine url
	api_key := "fDhZoo8j1WmTDjGp0eyUmzKilmz6dwQ0"	
	basic_url := "https://api.authy.com/protected/json/phones/verification/check?api_key="
	
	var buf bytes.Buffer	
	buf.WriteString(basic_url)
	buf.WriteString(api_key)
	buf.WriteString("&phone_number=")
	buf.WriteString(string(_check.Phone_number))
	buf.WriteString("&country_code=")
	buf.WriteString(string(_check.Country_code))
	buf.WriteString("&verification_code=")
	buf.WriteString(_check.Verification_code)
	
	url := buf.String()
	resp, err := http.Get( url )
	if err != nil { fmt.Println(err) }
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil { fmt.Println(err) }
	type Stat struct { Success bool }
	var stat Stat
	json.Unmarshal( body, &stat)
	
	invater := _check.Invater
	
	_info := &Info{
		Id: _check.Phone_number,
		Candies: 100,
		Followers: 0,		
	}
	
	if stat.Success { insert( _info, invater ) }
	ctx.JSON( stat )		

	return 
}

