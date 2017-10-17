import convertOperations from '../src/convertOperations'

const operations = [
    {
        "date": "2017-07-31",
        "amount": "5422",
        "links": [
          {
            "name": "link1",
            "href": "http://google.com",
            "method": "GET"
          }
        ]
    },

    {
        "date": "2017-07-31",
        "amount": "34343",
        "links": [
          {
            "name": "link2",
            "href": "https://amazon.com",
            "method": "GET"
          }
        ]
    },

    {
        "date": "2017-08-31",
        "amount": "5422",
        "links": [
          {
            "name": "link1",
            "href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates",
            "method": "GET"
          }
        ]
    },

];

const desired = {
    "2017-08-31": {
        "operations": [
            {
                "date": "2017-08-31",
                "amount": "5422",
                "links": [
                  {
                    "name": "link1",
                    "href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates",
                    "method": "GET"
                  }
                ]
            }
        ],
        "links": [
            {
              "name": "link1",
              "href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates",
              "method": "GET"
            }
        ]
    },
    "2017-07-31": {
        "operations": [
            {
                "date": "2017-07-31",
                "amount": "5422",
                "links": [
                  {
                    "name": "link1",
                    "href": "http://google.com",
                    "method": "GET"
                  }
                ]
            },
            {
                "date": "2017-07-31",
                "amount": "34343",
                "links": [
                  {
                    "name": "link2",
                    "href": "https://amazon.com",
                    "method": "GET"
                  }
                ]
            }
        ],
        "links": [
            {
              "name": "link1",
              "href": "http://google.com",
              "method": "GET"
            },
            {
              "name": "link2",
              "href": "https://amazon.com",
              "method": "GET"
            }
        ]
    }
};

describe('convertOperations', function(){

    it('should convert operations', function(){
            expect(convertOperations(operations)).toEqual(desired);
    });

});
