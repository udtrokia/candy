// 
package main

import (
	//	"github.com/kataras/iris"
	"bytes"
//	"fmt"
	"net/http"
	"strings"
	"io/ioutil"
	"github.com/kataras/iris"
	"encoding/json"
	"gopkg.in/yaml.v2"
)

type Start struct {
	Country_code string
	Phone_number string
}

type Check struct {
	Invater string
	Country_code string
	Phone_number string
	Verification_code string
}

type Stat struct {
	Success bool
}

type Config struct {
	User string
	Api_key string	
	Password string
	Database string
	
}

// send code
func start ( ctx iris.Context ) {

	// config
	c := Config{}
	y,_ := ioutil.ReadFile("./config.yaml")
	yaml.Unmarshal(y, &c)
	api_key := c.Api_key
	
	// expected phone_number, country_code	
	_start := &Start{}
	if err := ctx.ReadJSON(_start); err != nil {
		ctx.StatusCode(iris.StatusBadRequest)
		ctx.WriteString(err.Error())
		return
	}

	// combine url	
	var buf bytes.Buffer
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
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil { ctx.JSON(&Issue{ Loc : "Twillio Start Fail"}) }
	
	var twilliocb Stat
	json.Unmarshal(body, &twilliocb)
	if twilliocb.Success{
		ctx.JSON(&Issue{ Loc : "Send Out" })
	}
	defer resp.Body.Close()	
	return 
}

func check ( ctx iris.Context ) {
	// config
	c := Config{}
	y,_ := ioutil.ReadFile("./config.yaml")
	yaml.Unmarshal(y, &c)
	api_key := c.Api_key
	
	// expected country_code, phone_number, verification_code
	_check := &Check{}
	if err := ctx.ReadJSON(_check); err != nil {
		ctx.StatusCode(iris.StatusBadRequest)
		ctx.WriteString(err.Error())
		ctx.JSON(&Issue{ Loc : "Clear" })
	}

	// combine url
	basic_url := "https://api.authy.com/protected/json/phones/verification/check?api_key="
	
	var buf bytes.Buffer	
	buf.WriteString(basic_url)
	buf.WriteString(api_key)
	buf.WriteString("&phone_number=")
	buf.WriteString(_check.Phone_number)
	buf.WriteString("&country_code=")
	buf.WriteString(_check.Country_code)
	buf.WriteString("&verification_code=")
	buf.WriteString(_check.Verification_code)

	url := buf.String()
	resp, err := http.Get( url )
	defer resp.Body.Close()	
	if err != nil {
		ctx.JSON(&Issue{ Loc : " Twillio Post Check Fail " })
	}

	body, err := ioutil.ReadAll(resp.Body)
	var twilliocb Stat
	json.Unmarshal(body, &twilliocb)
	if (twilliocb.Success){
		invater := _check.Invater
		_user := &Users{
			Id: _check.Phone_number,
			Candies: 100,
			Followers: 0,
			Country_code: "86",
		}
		issue := insert(_user, invater)
		ctx.JSON(issue)
	}else{
		ctx.JSON(&Issue{"Twillio Check Fail"})
	}
	return
}

