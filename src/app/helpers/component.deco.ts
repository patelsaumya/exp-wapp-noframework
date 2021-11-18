//Class Decorator
export function ComponentDeco(config: any) {
    return function (constructor: Function) {
        if(config['template']) {
            constructor.prototype.html = config['template'];
        } else {
            constructor.prototype.html = config['templateUrl'];
        }
        constructor.prototype.html = config['templateUrl'];
    }
}
