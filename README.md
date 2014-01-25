This is a very tiny, lightweight log filer.  Writes log files to the directory it's called from.  Serializes objects and functions using util.inspect.

    var log = require('logfiler');
    log.path('./logs');
    log(this,that,other,things);

