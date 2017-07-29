const http = require('http');
const { success, notFound } = require('../lib/responses');

const keypad = http.createServer((request, response) => {
  const match = request.url.match(/^\/$/);

  if (!match) {
    return notFound(response);
  }

  success(response, {
    content: `
      <div class="keypad--row">
        @lava(/button/operator:/add)
        @lava(/button/number:/7) @lava(/button/number:/8) @lava(/button/number:/9)
      </div>

      <div class="keypad--row">
        @lava(/button/operator:/subtract)
        @lava(/button/number:/4) @lava(/button/number:/5) @lava(/button/number:/6)
      </div>

      <div class="keypad--row">
        @lava(/button/operator:/multiply)
        @lava(/button/number:/1) @lava(/button/number:/2) @lava(/button/number:/3)
      </div>

      <div class="keypad--row">
        @lava(/button/operator:/divide)
        @lava(/button/clear)    @lava(/button/number:/0) @lava(/button/calculate)
      </div>
    `
  });
});

keypad.listen(process.env.PORT);
