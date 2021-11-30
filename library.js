const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
       for (key in library.playlists) {
         let playlistNum = key;
         let name = library.playlists[key].name;
         let numberOfSongs = library.playlists[key];


         console.log(`${playlistNum}: ${name} - ${numberOfSongs};`);
       }
     };
     
     printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

const printTracks = function() {
       for (key in library.tracks) {
         let trackNum = key; 
         let trackName = library.tracks[key].name;
         let trackArtist = library.tracks[key].artist;
         let trackAlbum = library.tracks[key].album;
         
         console.log(`${trackNum}: ${trackName} by ${trackArtist} (${trackAlbum})`);
            }
     
     };

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId) {
  let playlistTitle = library.playlists[playlistId].name;
  let numberOfSongs = library.playlists[playlistId].tracks.length;
  console.log(`${playlistId}: ${playlistTitle} - ${numberOfSongs} tracks`);
  for (key of library.playlists[playlistId].tracks) {
      let songName = library.tracks[key].name;
      let artist = library.tracks[key].artist;
      let album = library.tracks[key].album;
      console.log(`${key}: ${songName} by ${artist} (${album})`);
  }
};

printPlaylist("p01");


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  console.log(`${trackId} just added to playlist ${playlistId} 🎵`);
}

addTrackToPlaylist("t01", "p02");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

const addTrack = function(name, artist, album) {
  
  let uniqueID = generateUid();
  library.tracks[uniqueID] = {
      id: uniqueID,
      album: album,
      artist: artist,
      name: name
  }
  console.log(library.tracks);
}

addTrack("Hallelujah", "Jeff Buckley", "Grace");


// adds a playlist to the library
const addPlaylist = function(name) {

  let uniqueID = generateUid();
  library.playlists[uniqueID] = {
      id: uniqueID,
      name: name,
      tracks: []
  }

}

addPlaylist("Suffering Soundly");

console.log(library.playlists);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search 
/*
const printSearchResults = function(query) {

}  */