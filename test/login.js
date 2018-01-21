var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chai = require('chai');
var expect = chai.expect;
var until = webdriver.until;

var driver = new webdriver.Builder()
    .withCapabilities( { browserName : 'chrome' } )
    .build();
	
describe( 'Login' , function(){
    before(function(done){
		driver.get("https://www.personalcapital.com/")
		.then( function() {
			//console.log("URL Reached");
		})
		.catch(function (error){
			console.log(error);
		});
		done();
    });
 
    it( 'Login Test Case', function(){
		driver.findElement(webdriver.By.css("a[data-automation-id='header.financial-software']"))
		.then(function(element){
			element.click();
			
		})
		.then(function(){
			driver.wait(until.urlContains("financial-software"), 5000);
			
		})
		.then(function(){
			driver.wait(until.elementLocated(webdriver.By.css("a.track-join-now-cta.rectangular-CTA-button.orange.space-right")))
			.then(function () {
				driver.findElement(webdriver.By.css("a.track-join-now-cta.rectangular-CTA-button.orange.space-right")).click();
			});
		})
		.then(function(){
			driver.wait(until.elementLocated(webdriver.By.id("username")))
			.then(function () {
				driver.findElement(webdriver.By.id("username")).sendKeys("test123@gmail.com");
				driver.findElement(webdriver.By.id("passwd")).sendKeys("Testing456");
				driver.findElement(webdriver.By.id("phoneNumber")).sendKeys("123-456-7890");
			});
		})
		.catch(function(error) {
			console.log(error + " MAYBE");
		});
	});
});