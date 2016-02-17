angular.module('SongSearcher.controllers.Main')

.factory('SearchSong', ['$http', function($http) {
		return {
			list: function(success, error){
				$http.get('stores/songlists.json').then(success, error);
			}
		}
	}])
;
