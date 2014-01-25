This is a very tiny, lightweight log filer.  Writes log files to the directory where your routine is, or you can specify another path. Serializes objects and functions using util.inspect().  

The log file is simply named '%TIMESTAMP%.log'

    var log = require('logfiler');
    log.path('./logs'); //not necessary
    log(this,that,other,things);

