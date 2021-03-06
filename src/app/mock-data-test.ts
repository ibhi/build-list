// Mock data for testing the data service
let data = [
    {
        'type': 'build',
        'name': 'Tenrox-R1_1235',
        'owner': 'samy',
        'state': 'Pending',
        'timestamp': '1460986020',
        'metrics': {
            'state': 'pending',
            'progress': 0,
            'testScore': 0,
            'maintainabilityScore': 0,
            'securityScore': 0,
            'workmanshipScore': 0
        },
        'build': {
            'state': 'pending',
            'progress': 0,
            'timestamp': ''
        },
        'unitTest' : {
            'state': 'pending',
            'progress': 0,
            'noOfTestsPassed': null,
            'noOfTestsFailed': null,
            'testsPassed': '',
            'codeCovered': ''
        },
        'functionalTest': {
            'state': 'pending',
            'progress': 0,
            'noOfTestsPassed': null,
            'noOfTestsFailed': null,
            'testsPassed': '',
            'codeCovered': ''
        },
        'result': {
            'title': '',
            'state': 'pending',
            'btnText': ''
        }
    },
    {
        'type': 'firewall',
        'name': '432462',
        'owner': 'jtuck',
        'state': 'Running',
        'timestamp': '1460981520',
        'metrics': {
            'state': 'running',
            'progress': 50,
            'testScore': 0,
            'maintainabilityScore': 0,
            'securityScore': 0,
            'workmanshipScore': 0
        },
        'build': {
            'state': 'pending',
            'progress': 0,
            'timestamp': ''
        },
        'unitTest' : {
            'state': 'pending',
            'progress': 0,
            'noOfTestsPassed': null,
            'noOfTestsFailed': null,
            'testsPassed': '',
            'codeCovered': ''
        },
        'functionalTest': {
            'state': 'pending',
            'progress': 0,
            'noOfTestsPassed': null,
            'noOfTestsFailed': null,
            'testsPassed': '',
            'codeCovered': ''
        },
        'result': {
            'title': '',
            'state': 'pending',
            'btnText': ''
        }
    },
    {
        'type': 'firewall',
        'name': '432461',
        'owner': 'samy',
        'state': 'Rejected',
        'timestamp': '1460976780',
        'metrics': {
            'state': 'rejected',
            'progress': 100,
            'testScore': 76,
            'maintainabilityScore': 44,
            'securityScore': 64,
            'workmanshipScore': 72
        },
        'build': {
            'state': 'completed',
            'progress': 100,
            'timestamp': '1460889960'
        },
        'unitTest' : {
            'state': 'completed',
            'progress': 100,
            'noOfTestsPassed': 142,
            'noOfTestsFailed': 10,
            'testsPassed': '73',
            'codeCovered': '76'
        },
        'functionalTest': {
            'state': 'completed',
            'progress': 100,
            'noOfTestsPassed': 4321,
            'noOfTestsFailed': 2145,
            'testsPassed': '68',
            'codeCovered': '23'
        },
        'result': {
            'title': 'Change Rejected',
            'state': 'rejected',
            'status': 'Metrics Reduction',
            'btnText': 'Find Issues'
        }
    },
    {
        'type': 'build',
        'name': 'Tenrox-R1_1234',
        'owner': 'jtuck',
        'state': 'Completed',
        'timestamp': '1460886120',
        'metrics': {
            'state': 'completed',
            'progress': 100,
            'testScore': 76,
            'maintainabilityScore': 44,
            'securityScore': 64,
            'workmanshipScore': 72
        },
        'build': {
            'state': 'completed',
            'progress': 100,
            'timestamp': '1460889960'
        },
        'unitTest' : {
            'state': 'completed',
            'progress': 100,
            'noOfTestsPassed': 142,
            'noOfTestsFailed': 10,
            'testsPassed': '73',
            'codeCovered': '76'
        },
        'functionalTest': {
            'state': 'completed',
            'progress': 100,
            'noOfTestsPassed': 4321,
            'noOfTestsFailed': 2145,
            'testsPassed': '68',
            'codeCovered': '23'
        },
        'result': {
            'title': '',
            'state': 'rejected',
            'status': 'Complete',
            'btnText': 'Deploy'
        }
    },
    {
        'type': 'firewall',
        'name': '432460',
        'owner': 'samy',
        'state': 'Rejected',
        'timestamp': '1460879460',
        'metrics': {
            'state': 'rejected',
            'progress': 100,
            'testScore': 45,
            'maintainabilityScore': 30,
            'securityScore': 52,
            'workmanshipScore': 40
        },
        'build': {
            'state': 'pending',
            'progress': 0,
            'timestamp': ''
        },
        'unitTest' : {
            'state': 'pending',
            'progress': 0,
            'noOfTestsPassed': null,
            'noOfTestsFailed': null,
            'testsPassed': '',
            'codeCovered': ''
        },
        'functionalTest': {
            'state': 'pending',
            'progress': 0,
            'noOfTestsPassed': null,
            'noOfTestsFailed': null,
            'testsPassed': '',
            'codeCovered': ''
        },
        'result': {
            'title': '',
            'state': 'pending',
            'btnText': ''
        }
    },
    {
        'type': 'firewall',
        'name': '432459',
        'owner': 'samy',
        'state': 'Accepted',
        'timestamp': '1460788980',
        'metrics': {
            'state': 'completed',
            'progress': 100,
            'testScore': 76,
            'maintainabilityScore': 44,
            'securityScore': 64,
            'workmanshipScore': 72
        },
        'build': {
            'state': 'completed',
            'progress': 100,
            'timestamp': '1460788980'
        },
        'unitTest' : {
            'state': 'completed',
            'progress': 100,
            'noOfTestsPassed': 142,
            'noOfTestsFailed': 10,
            'testsPassed': '73',
            'codeCovered': '76'
        },
        'functionalTest': {
            'state': 'completed',
            'progress': 100,
            'noOfTestsPassed': 4321,
            'noOfTestsFailed': 2145,
            'testsPassed': '68',
            'codeCovered': '23'
        },
        'result': {
            'title': 'Change Accepted',
            'state': 'accepted',
            'status': 'Auto-Merged',
            'btnText': 'Merge Build'
        }
    }
];

export function mockData() {
    return data;
}
