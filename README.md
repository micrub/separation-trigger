
# Usage

```
projects/TD/td-web-sockets-server  develop ✗                                                                              13m ⚑ ◒
▶ npm run enter -- -v

> DEBUG=web-sockets-server node src/start.js "-v"

{ verbose: true }

projects/TD/td-web-sockets-server  develop ✗                                                                              13m ⚑ ◒
▶ node src/start.js -- -i 1 -v
{ id: '1', verbose: true }

projects/TD/td-web-sockets-server  develop ✗                                                                              13m ⚑ ◒
▶ npm run enter -- --id 1 --verbose

> DEBUG=web-sockets-server node src/start.js "--id" "1" "--verbose"

{ id: '1', verbose: true }

projects/TD/td-web-sockets-server  develop ✗                                                                              14m ⚑ ◒
▶ npm run enter -- -i 1 -v

> DEBUG=web-sockets-server node src/start.js "-i" "1" "-v"

{ id: '1', verbose: true }

projects/TD/td-web-sockets-server  develop ✗                                                                              14m ⚑ ◒
▶ npm run enter -- -i 1

> DEBUG=web-sockets-server node src/start.js "-i" "1"

{ id: '1' }

projects/TD/td-web-sockets-server  develop ✗                                                                              14m ⚑ ◒
▶ npm run enter -- -i some

> DEBUG=web-sockets-server node src/start.js "-i" "some"

{ id: 'some' }
```
