export default {
  "options": {
    "java_package": "com.gftech.im.core.protocol",
    "java_outer_classname": "IMessageBuf"
  },
  "nested": {
    "IMessage": {
      "fields": {
        "RequestType": {
          "type": "RequestTypeEnum",
          "id": 1
        },
        "status": {
          "type": "Status",
          "id": 2
        },
        "ticket": {
          "type": "int32",
          "id": 3
        },
        "login": {
          "type": "Login",
          "id": 4
        },
        "info": {
          "type": "Information",
          "id": 5
        }
      },
      "nested": {
        "Information": {
          "fields": {
            "messageType": {
              "type": "MessageTypeEnum",
              "id": 1
            },
            "childMessageType": {
              "type": "ChildMessageTypeEnum",
              "id": 2
            },
            "from": {
              "type": "string",
              "id": 3
            },
            "fromNickName": {
              "type": "string",
              "id": 4
            },
            "to": {
              "type": "string",
              "id": 5
            },
            "toNickName": {
              "type": "string",
              "id": 6
            },
            "title": {
              "type": "string",
              "id": 7
            },
            "summary": {
              "type": "string",
              "id": 8
            },
            "body": {
              "type": "string",
              "id": 9
            },
            "clientTime": {
              "type": "int64",
              "id": 10
            },
            "serverTime": {
              "type": "int64",
              "id": 11
            },
            "unReadNum": {
              "type": "int32",
              "id": 12
            },
            "sequence": {
              "type": "int64",
              "id": 13
            },
            "msgId": {
              "type": "int64",
              "id": 14
            },
            "chatType": {
              "type": "ChatType",
              "id": 15
            },
            "isNew": {
              "type": "bool",
              "id": 16
            },
            "at": {
              "rule": "repeated",
              "type": "string",
              "id": 17
            },
            "instruct": {
              "rule": "repeated",
              "type": "string",
              "id": 30
            },
            "conferenceId": {
              "type": "string",
              "id": 31
            },
            "location": {
              "type": "string",
              "id": 32
            }
          }
        },
        "ChatType": {
          "values": {
            "SINGLE": 0,
            "GROUP": 1,
            "DOCTOR": 2,
            "USER": 3
          }
        },
        "Login": {
          "fields": {
            "token": {
              "type": "string",
              "id": 1
            },
            "timestamp": {
              "type": "int64",
              "id": 2
            },
            "systemType": {
              "type": "string",
              "id": 3
            },
            "deviceType": {
              "type": "string",
              "id": 4
            }
          }
        },
        "Status": {
          "fields": {
            "state": {
              "type": "bool",
              "id": 1
            },
            "sequence": {
              "type": "int64",
              "id": 2
            },
            "msgId": {
              "type": "int64",
              "id": 3
            },
            "serverTime": {
              "type": "int64",
              "id": 4
            },
            "message": {
              "type": "string",
              "id": 5
            },
            "sessionId": {
              "type": "string",
              "id": 6
            }
          }
        },
        "MessageTypeEnum": {
          "values": {
            "SESSION": 0,
            "MESSAGE": 1,
            "EVENT": 2,
            "INSTRUCT": 3
          }
        },
        "ChildMessageTypeEnum": {
          "values": {
            "DEFAULT": 0,
            "GROUPOUT": 1,
            "GROUPIN": 2,
            "REVOKE": 3,
            "AUDIO": 4,
            "IMAGE": 5,
            "VIDEO": 6,
            "CRVIDEO": 7,
            "INVITE": 8,
            "RECOMMENDDOCTOR": 9,
            "REPORT": 17,
            "INTERROGATION": 18,
            "ARTICLE": 19,
            "FOLLOWUP": 20,
            "NOTICE": 21,
            "MEMBER": 22,
            "UPLOADILLNESS": 23,
            "FOLLOWUPHISTORY": 24,
            "INQUIRY": 25,
            "IMG": 26,
            "RP": 27,
            "DIAS": 28,
            "EMH": 29,
            "ANY": 30,
						"ZJ": 31,
						"DSO": 32
          }
        },
        "RequestTypeEnum": {
          "values": {
            "SYNC": 0,
            "LOGIN": 1,
            "LOGOUT": 2,
            "KEEPALIVE": 3,
            "SENDINFO": 4,
            "INITINFO": 5,
            "ACCEPTINFO": 6,
            "RESPSYNC": 100,
            "RESPLOGIN": 101,
            "RESPLOGOUT": 102,
            "RESPKEEPALIVE": 103,
            "RESPSENDINFO": 104,
            "RESPINITINFO": 105,
            "RESPACCEPTINFO": 106
          }
        }
      }
    }
  }
}
