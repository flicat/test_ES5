/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-1-22
 * Time: 下午4:04
 * To change this template use File | Settings | File Templates.
 */


self.addEventListener('message', function(e) {
    self.postMessage({
        message: 'you said: ' + e.data.message
    });
});