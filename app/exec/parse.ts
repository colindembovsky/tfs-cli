import cmdm = require('../lib/tfcommand');
import cm = require('../lib/common');
import am = require('../lib/auth');
import Q = require('q');
import params = require('../lib/parameternames');

// export ID=tfx build get 5 | tfx parse .id
// export ID=tfx build query --top 1 | tfx parse [0].id

export function describe(): string {
    return 'parse json by piping json result from another tfx command';
}

export function getArguments(): string {
    return cmdm.formatArgumentsHint(
        ['jsonFilter'], []
    );
}

export function getCommand(): cmdm.TfCommand {
    // this just offers description for help and to offer sub commands
    return new Parse();
}

// doesn't require auth, connect etc...
export var isServerOperation: boolean = false

// since this is parsing and assign output to script variable, we can't have banner showing
export var hideBanner: boolean = true;

export class Parse extends cmdm.TfCommand {
    public exec(args: string[], options: cm.IOptions): Q.Promise<any> {
        var defer = Q.defer();

        var filter = args[0];
        if (!filter) {
            throw new Error('filter is required');
        }

        var contents = '';
        process.stdin.resume();  
        process.stdin.setEncoding('utf8');  
        process.stdin.on('data', function(data) {  
            contents += data.toString();
        }); 

        process.stdin.on('end', () => {
            try {
                var obj = JSON.parse(contents);
                process.stdout.write(eval('obj' + filter));
                defer.resolve({});
            }
            catch (err) {
                console.error(err.message);
            }
        });
        
        return <Q.Promise<any>>defer.promise;
    }

    public output(creds: am.ICredentials): void {
        // not s server operation
    }
}
