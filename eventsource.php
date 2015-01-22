<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache'); // 建议不要缓存SSE数据

/**
 * Constructs the SSE data format and flushes that data to the client.
 *
 * @param string $id Timestamp/id of this connection.
 * @param string $msg Line of text that should be transmitted.
 */
function sendMsg($id, $msg) {
  echo "id: $id" . PHP_EOL;
  echo "data: {\n";
  echo "data: \"time\": \"$msg\"\n";
  echo "data: }" . PHP_EOL;
  echo PHP_EOL;
  ob_flush();
  flush();
}

$serverTime = time();

sendMsg($serverTime, 'server time: ' . date("h:i:s", time()));