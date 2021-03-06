
(function(ns){

    ns.syntaxTesting = function syntaxTesting(){
        var filterAndMap = function filterAndMap()
        {
            var newReleases =
             [
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                },
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ];
        
            // ------------ INSERT CODE HERE! -----------------------------------
            // Chain the filter and map functions to select the id of all videos
            // with a rating of 5.0.
        
            return newReleases.
                filter(v => v.rating === 5).
                map( a => ({id:a.id}));
             // Complete this expression
            // ------------ INSERT CODE HERE! -----------------------------------
        },
        queryTree = function queryTree(){
           
            var movieLists = [
                {
                    name: "New Releases",
                    videos: [
                        {
                            "id": 70111470,
                            "title": "Die Hard",
                            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                            "rating": 4.0,
                            "bookmark": []
                        },
                        {
                            "id": 654356453,
                            "title": "Bad Boys",
                            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                            "rating": 5.0,
                            "bookmark": [{ id: 432534, time: 65876586 }]
                        }
                    ]
                },
                {
                    name: "Dramas",
                    videos: [
                        {
                            "id": 65432445,
                            "title": "The Chamber",
                            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                            "rating": 4.0,
                            "bookmark": []
                        },
                        {
                            "id": 675465,
                            "title": "Fracture",
                            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                            "rating": 5.0,
                            "bookmark": [{ id: 432534, time: 65876586 }]
                        }
                    ]
                }
            ],
            allVideoIdsInMovieLists = [];
        
            // ------------   INSERT CODE HERE!  -----------------------------------
            // Use two nested forEach loops to flatten the movieLists into a list of
            // video ids.
            // ------------   INSERT CODE HERE!  -----------------------------------
            movieLists.forEach(g => g.videos.
                    forEach(videos => allVideoIdsInMovieLists.push(videos.id)));
        
            return allVideoIdsInMovieLists;
        },
        concatAllFlatten = function concatAllFlatten() {
            var movieLists = [
                    {
                        name: "New Releases",
                        videos: [
                            {
                                "id": 70111470,
                                "title": "Die Hard",
                                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                                "rating": 4.0,
                                "bookmark": []
                            },
                            {
                                "id": 654356453,
                                "title": "Bad Boys",
                                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                                "rating": 5.0,
                                "bookmark": [{ id: 432534, time: 65876586 }]
                            }
                        ]
                    },
                    {
                        name: "Dramas",
                        videos: [
                            {
                                "id": 65432445,
                                "title": "The Chamber",
                                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                                "rating": 4.0,
                                "bookmark": []
                            },
                            {
                                "id": 675465,
                                "title": "Fracture",
                                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                                "rating": 5.0,
                                "bookmark": [{ id: 432534, time: 65876586 }]
                            }
                        ]
                    }
                ];
        
            // ------------   INSERT CODE HERE!  -----------------------------------
            // Use map and concatAll to flatten the movieLists in a list of video ids.
            // ------------   INSERT CODE HERE!  -----------------------------------
            return movieLists
                .map(movieList => movieList.videos
                    .map(item => item.id)
                ).concatAll();
        
        },
        getAll = function getAll() {
            var movieLists = [
                    {
                        name: "Instant Queue",
                        videos : [
                            {
                                "id": 70111470,
                                "title": "Die Hard",
                                "boxarts": [
                                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                                ],
                                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                                "rating": 4.0,
                                "bookmark": []
                            },
                            {
                                "id": 654356453,
                                "title": "Bad Boys",
                                "boxarts": [
                                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
        
                                ],
                                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                                "rating": 5.0,
                                "bookmark": [{ id: 432534, time: 65876586 }]
                            }
                        ]
                    },
                    {
                        name: "New Releases",
                        videos: [
                            {
                                "id": 65432445,
                                "title": "The Chamber",
                                "boxarts": [
                                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                                ],
                                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                                "rating": 4.0,
                                "bookmark": []
                            },
                            {
                                "id": 675465,
                                "title": "Fracture",
                                "boxarts": [
                                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                                    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                                ],
                                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                                "rating": 5.0,
                                "bookmark": [{ id: 432534, time: 65876586 }]
                            }
                        ]
                    }
                ];
        
        
            // Use one or more map, concatAll, and filter calls to create an array with the following items
            // [
            //	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            //	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
            //	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
            //	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
            // ];

            return movieLists
            .map(movieList => movieList.videos
                .map(video => video.boxarts
                    .filter(box => box.width === 150 && box.height === 200)
                    .map(box => ({id: video.id, title: video.title, boxart: box.url}))
                ).concatAll()
            ).concatAll();
        },
        useConcatmap = function useConcatmap() {
            var movieLists = [
                    {
                        name: "Instant Queue",
                        videos : [
                            {
                                "id": 70111470,
                                "title": "Die Hard",
                                "boxarts": [
                                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                                ],
                                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                                "rating": 4.0,
                                "bookmark": []
                            },
                            {
                                "id": 654356453,
                                "title": "Bad Boys",
                                "boxarts": [
                                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
        
                                ],
                                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                                "rating": 5.0,
                                "bookmark": [{ id: 432534, time: 65876586 }]
                            }
                        ]
                    },
                    {
                        name: "New Releases",
                        videos: [
                            {
                                "id": 65432445,
                                "title": "The Chamber",
                                "boxarts": [
                                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                                ],
                                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                                "rating": 4.0,
                                "bookmark": []
                            },
                            {
                                "id": 675465,
                                "title": "Fracture",
                                "boxarts": [
                                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                                    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                                ],
                                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                                "rating": 5.0,
                                "bookmark": [{ id: 432534, time: 65876586 }]
                            }
                        ]
                    }
                ];
        
        
            // Use one or more concatMap, map, and filter calls to create an array with the following items
            // [
            //	 {"id": 675465, "title": "Fracture", "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            //	 {"id": 65432445, "title": "The Chamber", "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
            //	 {"id": 654356453, "title": "Bad Boys", "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
            //	 {"id": 70111470, "title": "Die Hard", "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
            // ];
        
            return movieLists
                .concatMap(movieListItem => movieListItem.videos
                    .concatMap(video => video.boxarts
                        .filter(boxart => boxart.width === 150 && boxart.height===200)
                        .map(item => ({id: video.id, title: video.title, boxart: item.url}))
                    )
                )
        
            },
            getLargest = function getlargest() {
                var boxarts = [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
                        { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
                    ],
                    currentSize,
                    maxSize = -1,
                    largestBoxart;
            
                boxarts.forEach(boxart => {
                    currentSize = boxart.width * boxart.height;
                    if (currentSize > maxSize) {
                        largestBoxart = boxart;
                        maxSize = currentSize;
                    }
                });
            
                return largestBoxart;
            },
            getLargest2 =  function getLargest2() {
                var ratings = [2,20,3,1,4,5];
            
                // You should return an array containing only the largest rating. Remember that reduce always
                // returns an array with one item.
                return ratings.
                    reduce((acc, cur) => acc > cur ? acc : cur);
                                
            },
            
            getLargestBoxart = function getLargestBoxart() {
                var boxarts = [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
                        { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
                    ];
            
                // You should return an array containing only the URL of the largest box art. Remember that reduce always
                // returns an array with one item.
                return boxarts.
                    reduce((acc, cur) => acc.width * acc.height > cur.width * cur.height ? acc : cur )
                    .map(c => c.url);
            },
            reduseWithIntialVal = function reduseWithIntialVal() {
                var videos = [
                    {
                        "id": 65432445,
                        "title": "The Chamber"
                    },
                    {
                        "id": 675465,
                        "title": "Fracture"
                    },
                    {
                        "id": 70111470,
                        "title": "Die Hard"
                    },
                    {
                        "id": 654356453,
                        "title": "Bad Boys"
                    }
                ];
            
                // Expecting this output...
                // [
                //	 {
                //		 "65432445": "The Chamber",
                //		 "675465": "Fracture",
                //		 "70111470": "Die Hard",
                //		 "654356453": "Bad Boys"
                //	 }
                // ]
                return videos.
                    reduce((accumulatedMap, video) => Object.assign(accumulatedMap,  {[video.id] : video.title}), {});
            },
            fullRetrieve = function fullRetrieve() {
                var movieLists = [
                    {
                        name: "New Releases",
                        videos: [
                            {
                                "id": 70111470,
                                "title": "Die Hard",
                                "boxarts": [
                                    { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                                    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                                ],
                                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                                "rating": 4.0,
                                "bookmark": []
                            },
                            {
                                "id": 654356453,
                                "title": "Bad Boys",
                                "boxarts": [
                                    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                                    { width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
            
                                ],
                                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                                "rating": 5.0,
                                "bookmark": [{ id:432534, time:65876586 }]
                            }
                        ]
                    },
                    {
                        name: "Thrillers",
                        videos: [
                            {
                                "id": 65432445,
                                "title": "The Chamber",
                                "boxarts": [
                                    { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
                                    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                                ],
                                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                                "rating": 4.0,
                                "bookmark": []
                            },
                            {
                                "id": 675465,
                                "title": "Fracture",
                                "boxarts": [
                                    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                                    { width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
                                    { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                                ],
                                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                                "rating": 5.0,
                                "bookmark": [{ id:432534, time:65876586 }]
                            }
                        ]
                    }
                ];
            
            
                // Use one or more concatMap, map, and reduce calls to create an array with the following items (order doesn't matter)
                // [
                //	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
                //	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
                //	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
                //	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
                // ];
            
                // return movieLists.
                //     concatMap(function(movieList) {
                //         return movieList.videos.concatMap(function(video){
                //             return video.boxarts.reduce(function (acc, cur){
                //                 return acc.width * acc.height < cur.width * cur.height? acc: cur;
                //             }).map(function(boxart){
                //                 return {id:video.id, title:video.title, boxart: boxart.url};
                //             });
                //         });
                //     });

                return movieLists.
                    concatMap(movieList => movieList.videos
                        .concatMap(video => video.boxarts
                            .reduce((acc, cur) => acc.width * acc.height < cur.width * cur.height? acc: cur)
                            .map(boxart => ({id:video.id, title:video.title, boxart: boxart.url}))
                           
                        )
                    );
            },
            theZip = function theZip() {
                var videos = [
                        {
                            "id": 70111470,
                            "title": "Die Hard",
                            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                            "rating": 4.0,
                        },
                        {
                            "id": 654356453,
                            "title": "Bad Boys",
                            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                            "rating": 5.0,
                        },
                        {
                            "id": 65432445,
                            "title": "The Chamber",
                            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                            "rating": 4.0,
                        },
                        {
                            "id": 675465,
                            "title": "Fracture",
                            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                            "rating": 5.0,
                        }
                    ],
                    bookmarks = [
                        {id: 470, time: 23432},
                        {id: 453, time: 234324},
                        {id: 445, time: 987834}
                    ],
                counter,
                videoIdAndBookmarkIdPairs = [];
            
                for(counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
                    // Insert code here to create a {videoId, bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array.
                    videoIdAndBookmarkIdPairs.push({videoId:videos[counter].id, bookmarkId: bookmarks[counter].id});
                }
            
                return videoIdAndBookmarkIdPairs;
            },
            callZipArray = function callZipArray() {
                var videos = [
                        {
                            "id": 70111470,
                            "title": "Die Hard",
                            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                            "rating": 4.0,
                        },
                        {
                            "id": 654356453,
                            "title": "Bad Boys",
                            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                            "rating": 5.0,
                        },
                        {
                            "id": 65432445,
                            "title": "The Chamber",
                            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                            "rating": 4.0,
                        },
                        {
                            "id": 675465,
                            "title": "Fracture",
                            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                            "rating": 5.0,
                        }
                    ],
                    bookmarks = [
                        {id: 470, time: 23432},
                        {id: 453, time: 234324},
                        {id: 445, time: 987834}
                    ];
            
                return Array.
                    zip(videos, bookmarks, (video, bookmark) => ({videoId : video.id, bookmarkId: bookmark.id}) );
            }, 
            retrieve = function retrieve() {
                var movieLists = [
                        {
                            name: "New Releases",
                            videos: [
                                {
                                    "id": 70111470,
                                    "title": "Die Hard",
                                    "boxarts": [
                                        { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                                        { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                                    ],
                                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                                    "rating": 4.0,
                                    "interestingMoments": [
                                        { type: "End", time:213432 },
                                        { type: "Start", time: 64534 },
                                        { type: "Middle", time: 323133}
                                    ]
                                },
                                {
                                    "id": 654356453,
                                    "title": "Bad Boys",
                                    "boxarts": [
                                        { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                                        { width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
            
                                    ],
                                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                                    "rating": 5.0,
                                    "interestingMoments": [
                                        { type: "End", time:54654754 },
                                        { type: "Start", time: 43524243 },
                                        { type: "Middle", time: 6575665}
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Instant Queue",
                            videos: [
                                {
                                    "id": 65432445,
                                    "title": "The Chamber",
                                    "boxarts": [
                                        { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
                                        { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                                    ],
                                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                                    "rating": 4.0,
                                    "interestingMoments": [
                                        { type: "End", time:132423 },
                                        { type: "Start", time: 54637425 },
                                        { type: "Middle", time: 3452343}
                                    ]
                                },
                                {
                                    "id": 675465,
                                    "title": "Fracture",
                                    "boxarts": [
                                        { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                                        { width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
                                        { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                                    ],
                                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                                    "rating": 5.0,
                                    "interestingMoments": [
                                        { type: "End", time:45632456 },
                                        { type: "Start", time: 234534 },
                                        { type: "Middle", time: 3453434}
                                    ]
                                }
                            ]
                        }
                    ];
            
                //------------ COMPLETE THIS EXPRESSION --------------
                return movieLists.concatMap(function(movieList) 
                {
                    return movieList.videos.concatMap(function(video) 
                    {
                        return Array.zip(video.boxarts.reduce((acc,curr) => acc.width * acc.height < curr.width * curr.height? acc: curr),
                                video.interestingMoments.filter(interestingMoment => interestingMoment.type === "Middle"),
                                (boxart, interestingMoment) => ({id: video.id, title: video.title, time: interestingMoment.time, url: boxart.url}));

                    });
                });s

            },
            ArraysToTrees = function ArraysToTrees() {
                var lists = [
                        {
                            "id": 5434364,
                            "name": "New Releases"
                        },
                        {
                            "id": 65456475,
                            "name": "Thrillers"
                        }
                    ],
                    videos = [
                        {
                            "listId": 5434364,
                            "id": 65432445,
                            "title": "The Chamber"
                        },
                        {
                            "listId": 5434364,
                            "id": 675465,
                            "title": "Fracture"
                        },
                        {
                            "listId": 65456475,
                            "id": 70111470,
                            "title": "Die Hard"
                        },
                        {
                            "listId": 65456475,
                            "id": 654356453,
                            "title": "Bad Boys"
                        }
                    ];
            
                return lists.map(list =>
                    ({
                        name: list.name,
                        videos : videos
                            .filter(video => list.id === video.listId)
                            .map(video => ({id: video.id, title: video.title}))
                    }))
            };

        return {
            filterAndMap,
            queryTree,
            concatAllFlatten,
            getAll,
            useConcatmap,
            getLargest,
            getLargest2,
            getLargestBoxart,
            reduseWithIntialVal,
            fullRetrieve,
            theZip,
            retrieve,
            ArraysToTrees

        };

    }(); 

})(window._myRx = window._myRx  || {});

Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		results.push(projectionFunction(itemInArray));

	});

	return results;
};

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'

Array.prototype.filter = function(predicateFunction) {
	var results = [];
	this.forEach(function(itemInArray) {

        if(predicateFunction(itemInArray)){
            results.push(itemInArray);
        }
		// ------------ INSERT CODE HERE! ----------------------------
		// Apply the predicateFunction to each item in the array.
		// If the result is truthy, add the item to the results array.
		// Note: remember you can add items to the array using the array's
		// push() method.
		// ------------ INSERT CODE HERE! ----------------------------
	});

	return results;
};

// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]"
Array.prototype.concatAll = function() {
	var results = [];
	// this.forEach(function(subArray) {
	// 	// ------------ INSERT CODE HERE! ----------------------------
	// 	// Add all the items in each subArray to the results array.
	// 	// ------------ INSERT CODE HERE! ----------------------------
    //     subArray.forEach(function(item){
    //         results.push(item);
    //     });
    // });
    this.forEach(subArray => 
        subArray.forEach(item => results.push(item)));

	return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array
    
Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
	return this.
		map(item =>projectionFunctionThatReturnsArray(item))
		// apply the concatAll function to flatten the two-dimensional array
		.concatAll();
};

/*
	var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
	// collect all the words for each number, in every language, in a single, flat list
	var allWords = [0,1,2].
		concatMap(function(index) {
			return spanishFrenchEnglishWords[index];
		});

	return JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two"]';
*/
Array.prototype.reduce = function(combiner, initialValue) {
	var counter,
		accumulatedValue;

	// If the array is empty, do nothing
	if (this.length === 0) {
		return this;
	}
	else {
		// If the user didn't pass an initial value, use the first item.
		if (arguments.length === 1) {
			counter = 1;
			accumulatedValue = this[0];
		}
		else if (arguments.length >= 2) {
			counter = 0;
			accumulatedValue = initialValue;
		}
		else {
			throw "Invalid arguments.";
		}

		// Loop through the array, feeding the current value and the result of
		// the previous computation back into the combiner function until
		// we've exhausted the entire array and are left with only one function.
		while(counter < this.length) {
			accumulatedValue = combiner(accumulatedValue, this[counter])
			counter++;
		}

		return [accumulatedValue];
	}
};

// JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'

Array.zip = function(left, right, combinerFunction) {
	var counter,
		results = [];

	for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
        // Add code here to apply the combinerFunction to the left and right-hand items in the respective arrays
        results.push(combinerFunction(left[counter], right[counter]));
	}

	return results;
};
		
		