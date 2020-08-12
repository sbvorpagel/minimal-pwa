self.addEventListener('install', function(event) {
	event.waitUntil(
		caches
			.open('pwa-cache')
			.then(function(cache) {
				return cache.add('index.html');
			})
	);
});

self.addEventListener('fetch', function(event) {
	event.repondWith(
		caches
			.match(event.request)
			.then(function(response) {
				return response || fetch(event.request);
			})
	);
});
