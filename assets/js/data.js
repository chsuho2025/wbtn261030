window.PORTFOLIO = {
  "site": {
    "name": "최수호",
    "subtitle": "AI Animator Portfolio",
    "intro": "",
    "showIntro": false,
    "showPlaceholders": false,
    "contact": {
      "email": null,
      "phone": null,
      "links": []
    },
    "title": "최수호 | AI Animator 포트폴리오"
  },
  "motion": {
    "enabled": true,
    "intro": false,
    "cardVideoAutoplay": true
  },
  "projects": [
    {
      "slug": "project-01",
      "title": "《맹종》",
      "subtitle": "웹툰 기반 AI 애니메이션 제작",
      "summary": "약 5분의 공포 애니메이션으로 제작. 기획·이미지·영상·음향 생성·편집 담당.",
      "competency": "원작 이미지 가공 · 동작 제어 · 사운드 연출",
      "tags": [],
      "articleLabel": "개인 프로젝트 · 웹툰 기반 AI 애니메이션",
      "card": {
        "type": "image",
        "src": "assets/media/maengjong/frame-233.jpg",
        "poster": null,
        "alt": "맹종 · 붉은 사당 앞에 선 인물",
        "position": "50% 50%"
      },
      "resume": [
        {
          "heading": "제작 범위",
          "body": [
            "《맹종》 1화와 2화 초반부를 약 5분의 세로형 애니메이션으로 제작. 기획부터 최종 편집·믹싱까지 전 과정 담당."
          ]
        },
        {
          "heading": "연출 방향",
          "body": [
            "원작의 스크롤 호흡을 정지 화면·시선 변화·암전·소리로 재구성. 장면에 필요한 움직임을 선별해 생성 영상과 편집으로 표현."
          ]
        },
        {
          "heading": "사용 도구",
          "body": [
            "Photoshop·Firefly, ChatGPT Images, Kling 2.6·3.0 Omni, Blender, ElevenLabs, Premiere Pro."
          ]
        }
      ],
      "outcome": {
        "body": "원작 이미지 193장 가공. 최종 편집용 I2V 영상 소스 108개 선별, 오디오 164개 구성(직접 선별한 환경음·폴리 포함).",
        "media": [
          {
            "type": "embed",
            "src": "https://www.youtube-nocookie.com/embed/fxLTM8oc8qY",
            "aspect": "9/16",
            "alt": "《맹종》 1~2화 · AI 애니메이션 완성본",
            "caption": "《맹종》 1~2화 · AI 애니메이션 완성본"
          }
        ],
        "action": null,
        "note": "원작: 네이버웹툰 《맹종》 · 개인 포트폴리오용 제작 연구"
      },
      "sections": [
        {
          "type": "article",
          "heading": "원작의 특징을 유지하며 첫 프레임 제작",
          "parts": [
            {
              "body": [
                "말풍선과 내레이션을 지운 자리를 복원하고, 좁은 웹툰 패널을 세로형 첫 프레임으로 확장했습니다. 장면의 의미를 전달하는 소품의 문자와 파편, 속도선은 남겼습니다.",
                "작은 결손은 Photoshop의 선택 영역과 마스크로 범위를 제한해 Firefly로 보정했습니다. 크게 잘린 캐릭터와 공간은 ChatGPT Images로 전체 구도를 재구성한 뒤, 부족한 배경과 경계만 Firefly로 마무리했습니다. 원작과 얼굴의 특징, 신체 비례, 선화의 연결을 대조해 사용할 이미지를 골랐습니다."
              ]
            }
          ]
        },
        {
          "type": "article",
          "heading": "움직일 대상과 고정할 대상을 나눠 동작 지시",
          "parts": [
            {
              "body": [
                "싱잉볼을 받친 손은 고정하고, 다른 손의 막대기로 그릇 옆면을 한 번 치는 컷입니다. 상황만 설명했을 때는 타격이 반복되거나 그릇과 받치는 손까지 함께 움직였습니다.",
                "막대기와 움직이는 손의 경로, 접촉 후 반동과 정지 상태를 따로 적었습니다. 그릇과 받치는 손, 배경과 카메라에는 각각 고정 조건을 지정했습니다."
              ],
              "media": [
                {
                  "type": "image",
                  "src": "assets/media/maengjong/striking-first-frame.png",
                  "aspect": "9/16",
                  "alt": "싱잉볼 타격 컷에 사용한 첫 프레임",
                  "caption": "싱잉볼 타격 컷에 사용한 첫 프레임"
                }
              ]
            },
            {
              "heading": "모션 가이드 시험과 최종 입력 조정",
              "body": [
                "Blender의 단순 도형으로 이동 경로와 반동을 검토하고, 그 과정에서 정한 조건을 텍스트 지시에 반영했습니다. 다만 가이드 도형이 결과에 섞이는 문제가 있어, 최종 컷은 가이드를 제외한 Kling 2.6의 첫 프레임·텍스트 방식으로 생성했습니다.",
                "막대기의 길이와 두께를 유지하고 한 번 타격한 뒤 멈추도록 지시했습니다. 그릇은 접촉 전후에도 흔들리지 않도록 했으며, 검수 후 해당 결과를 최종 소스로 선택했습니다."
              ],
              "media": [
                {
                  "type": "video",
                  "src": "assets/media/maengjong/striking-guide.mp4",
                  "aspect": "9/16",
                  "alt": "Blender 모션 가이드 · 경로와 반동 검토용",
                  "caption": "Blender 모션 가이드 · 경로와 반동 검토용",
                  "preview": true,
                  "poster": "assets/media/maengjong/striking-guide-poster.jpg"
                },
                {
                  "type": "video",
                  "src": "assets/media/maengjong/striking-final.mp4",
                  "aspect": "9/16",
                  "alt": "최종 채택한 I2V 영상 · 가이드 제외 후 생성",
                  "caption": "최종 채택한 I2V 영상 · 가이드 제외 후 생성",
                  "preview": true,
                  "poster": "assets/media/maengjong/striking-final-poster.jpg"
                }
              ]
            }
          ]
        },
        {
          "type": "article",
          "heading": "장면에 필요한 소리를 생성하고 편집으로 완성",
          "parts": [
            {
              "heading": "효과음은 재질과 충돌 방식으로 지시",
              "body": [
                "숟가락으로 밥상을 치는 장면에서는 동작의 강도를 전달할 충격음이 필요했습니다. 숟가락과 밥상을 그대로 지시한 후보에서 원하는 타격감이 나오지 않아, 큰 금속 쟁반을 한 번 강하게 치는 소리로 지시를 바꿨습니다. 생성한 후보를 비교하고 화면의 충돌 시점에 맞춰 편집했습니다."
              ],
              "compare": {
                "type": "audio",
                "before": {
                  "name": "기존 후보 · 숟가락으로 밥상 치기",
                  "src": "assets/media/maengjong/spoon-candidate-v04.m4a"
                },
                "after": {
                  "name": "수정 후보 · 금속 쟁반을 한 번 강하게 치기",
                  "src": "assets/media/maengjong/spoon-candidate-v05.m4a"
                }
              }
            },
            {
              "heading": "음악은 장면별로 나눠 전환 시점 조절",
              "body": [
                "약 60초 피날레에 7단계 변화를 한 번에 지시하자 무음과 전환 시점이 어긋났습니다. 음악을 5개의 짧은 구간으로 나눠 생성하고, 정확한 길이와 진입 시점은 편집에서 맞췄습니다. 방울·북·금속성 울림을 중심으로 무속 공포의 음색을 지정하고, 파손음과 문소리는 별도 효과음으로 분리했습니다."
              ]
            }
          ]
        },
        {
          "type": "article",
          "heading": "추가 음향 소스와 대사 제작 방식",
          "parts": [
            {
              "body": [
                "짧은 대사의 첫 음절이나 끝음이 잘릴 때는 본 대사 앞뒤에 감정과 호흡을 유도하는 문장을 넣었습니다. 생성한 음성에서 실제 사용할 대사를 분리하고, 최종 편집에서는 연기와 호흡을 직접 들으며 구간을 정했습니다.",
                "아래 화림 음성의 본 대사는 ‘엄마, 언제 와?’입니다. 생성할 때는 ‘엄마, 듣고 있어? 엄마, 언제 와? 빨리 왔으면 좋겠어.’로 앞뒤 문장을 더하고, 가볍게 투정하며 기다리는 감정을 지시했습니다. 음성은 앞뒤 문맥을 포함한 생성 소스이며, 완성 영상에서는 본 대사 구간을 편집해 사용했습니다."
              ],
              "audioItems": [
                {
                  "role": "대사 생성 소스",
                  "source": "mixed",
                  "desc": "문맥을 포함한 생성 음성. 완성 영상에서는 본 대사 구간을 편집해 사용했습니다.",
                  "audio": "assets/media/maengjong/DIA_HW_05_FINAL.m4a"
                },
                {
                  "role": "사당 접근 음악",
                  "source": "mixed",
                  "desc": "숨바람·금속 마찰·방울 소리를 중심으로 만든 장면별 음악입니다.",
                  "audio": "assets/media/maengjong/BGM-06B_FINAL.m4a"
                },
                {
                  "role": "빙의 장면 음악",
                  "source": "mixed",
                  "desc": "의식의 절정에 사용하는 음악. 문이 열리는 소리는 별도로 배치했습니다.",
                  "audio": "assets/media/maengjong/BGM-06D_FINAL.m4a"
                }
              ],
              "heading": "앞뒤 문장을 더해 짧은 대사의 잘림 보완"
            }
          ],
          "collapsible": false
        }
      ]
    },
    {
      "slug": "project-02",
      "title": "《점괘보는 공녀님》",
      "subtitle": "웹툰 기반 AI 애니메이션 제작",
      "summary": "원작 기반 애니메이션 제작. 첫 프레임·화자별 합성·에피소드 및 홍보 영상 편집 담당.",
      "competency": "첫 프레임 제작 · 화자별 합성 · 목적별 편집",
      "tags": [],
      "articleLabel": "카카오페이지 인턴 · 웹툰 영상화 프로젝트",
      "card": {
        "type": "image",
        "src": "assets/media/gongnyeo/speaker-female.png",
        "poster": null,
        "alt": "점괘보는 공녀님 · 두 인물의 대화 장면",
        "position": "50% 50%"
      },
      "resume": [
        {
          "heading": "제작 배경",
          "body": [
            "카카오페이지 인턴 당시 웹툰 영상화 및 숏애니 제작 에이전트 구축 프로젝트. 《점괘보는 공녀님》을 활용한 이미지·영상 생성과 편집·합성 사례."
          ]
        },
        {
          "heading": "담당 범위",
          "body": [
            "원작 이미지 가공·첫 프레임 제작·영상 및 음향 생성·화자별 합성·최종 편집. 모델 선택과 제작 순서를 기록하고 에이전트 적용 공정 검토."
          ]
        },
        {
          "heading": "전체 프로젝트 범위",
          "body": [
            "전체 프로젝트에서 에피소드형 15편·마케팅용 12편, 총 27편을 혼자 내부 테스트용으로 완성. 이 페이지는 그중 《점괘보는 공녀님》 대표 사례."
          ]
        }
      ],
      "outcome": {
        "body": "《점괘보는 공녀님》 9화 에피소드형 완성본. 첫 프레임 준비·화자별 대화 합성·티저 편집 사례 수록.",
        "media": [
          {
            "type": "embed",
            "src": "https://www.youtube-nocookie.com/embed/PwsN7nyzPyk",
            "aspect": "9/16",
            "alt": "《점괘보는 공녀님》 9화 · 에피소드형 완성본",
            "caption": "《점괘보는 공녀님》 9화 · 에피소드형 완성본"
          }
        ],
        "action": null,
        "note": "원작: 카카오페이지 《점괘보는 공녀님》"
      },
      "sections": [
        {
          "type": "article",
          "heading": "원작 컷을 세로형 첫 프레임으로 확장",
          "parts": [
            {
              "body": [
                "첫 프레임에서는 인물의 얼굴·의상·선화를 유지하고 영상에 필요한 배경과 여백을 확보했습니다. 원작 컷과 세로형 확장 결과를 비교하며 캐릭터의 인상이 달라지지 않았는지 확인했습니다.",
                "같은 원본 컷에 Adobe Firefly와 Nano Banana를 적용해 확장 결과를 비교했습니다. 원작의 선과 채색을 보존하는 정도를 기준으로 팀원들과 검토하고, 첫 프레임 제작에 사용할 모델을 선택했습니다."
              ],
              "media": [
                {
                  "type": "image",
                  "src": "assets/media/gongnyeo/first-frame-original.png",
                  "aspect": "481/587",
                  "alt": "원작 컷 · 인물과 그림체의 기준",
                  "caption": "원작 컷 · 인물과 그림체의 기준"
                },
                {
                  "type": "image",
                  "src": "assets/media/gongnyeo/first-frame-vertical.png",
                  "aspect": "9/16",
                  "alt": "9:16 세로형으로 확장한 첫 프레임",
                  "caption": "9:16 세로형으로 확장한 첫 프레임"
                }
              ]
            }
          ]
        },
        {
          "type": "article",
          "heading": "화자별 영상과 정지 프레임을 합성해 대화 구현",
          "parts": [
            {
              "body": [
                "두 인물의 대화를 한 번에 생성하면 말하지 않는 인물의 입도 움직이거나 발화 순서가 대사와 맞지 않았습니다. 각 인물의 발화 영상을 따로 생성하고, 말하는 인물의 영상에 상대방의 안정된 정지 프레임을 결합했습니다.",
                "이후 음성을 기준으로 발화의 시작과 종료를 정하고, 영상 속도와 정지 구간을 조정했습니다. 한 인물의 결과를 수정할 때도 상대방의 안정된 프레임은 유지할 수 있도록 소스를 분리한 방식입니다."
              ],
              "media": [
                {
                  "type": "image",
                  "src": "assets/media/gongnyeo/speaker-regions-ab.webp",
                  "aspect": "2/3",
                  "alt": "왼쪽 여성 화자 영역 A와 오른쪽 남성 화자 영역 B를 구분한 설명 이미지",
                  "caption": "화자별 합성 영역을 설명하기 위해 AI로 제작한 이미지. 실제 생성 소스의 정지 프레임과 구분."
                }
              ]
            },
            {
              "heading": "A·B 영역의 역할",
              "body": [
                "**A · 왼쪽 여성 화자 영역:** 여성이 말하는 구간에는 이 영역의 발화 영상을 사용하고, 오른쪽 남성은 안정된 정지 프레임으로 유지합니다.",
                "**B · 오른쪽 남성 화자 영역:** 남성이 말하는 구간에는 이 영역의 발화 영상을 사용하고, 왼쪽 여성은 안정된 정지 프레임으로 유지합니다.",
                "A와 B는 시간 순서가 아니라 화면 안의 합성 영역을 뜻합니다. 음성의 시작과 종료에 맞춰 사용할 영역의 영상과 상대방의 정지 프레임을 결합합니다."
              ]
            },
            {
              "media": [
                {
                  "type": "embed",
                  "src": "https://www.youtube-nocookie.com/embed/ahtOHt9TQtE",
                  "aspect": "9/16",
                  "alt": "화자별 소스를 연결한 실제 합성 결과",
                  "caption": "화자별 소스를 연결한 실제 합성 결과"
                }
              ]
            }
          ]
        },
        {
          "type": "article",
          "heading": "본편과 홍보 영상의 목적에 맞춰 편집",
          "parts": [
            {
              "body": [
                "처음에는 웹툰 한 회차를 애니메이션으로 감상하는 에피소드형을 제작했습니다. 이후 같은 소스를 영화 예고편처럼 활용하기 위해 약 45초의 마케팅용 영상으로 다시 편집했습니다.",
                "본편에서는 원작의 서사를 따라갈 수 있는 호흡을 유지했습니다. 홍보 영상에서는 초반에 시선을 끌고 중요한 장면에서 이야기를 끊은 뒤 작품명과 플랫폼명을 보여줘, 이어지는 내용을 원작에서 확인하도록 구성했습니다."
              ],
              "media": [
                {
                  "type": "embed",
                  "src": "https://www.youtube-nocookie.com/embed/Bt2eeOXGEI8",
                  "aspect": "9/16",
                  "alt": "《점괘보는 공녀님》 9화 · 티저형 프로모션",
                  "caption": "《점괘보는 공녀님》 9화 · 티저형 프로모션"
                }
              ]
            },
            {
              "body": [
                "제작 과정에서 확인한 모델 선택 기준, 보존할 요소, 화자별 생성 방식과 편집 순서를 기록했습니다. 한 편의 결과물을 만드는 경험을 바탕으로, 다음 작품에도 적용할 제작 방법과 에이전트에 맡길 공정을 검토했습니다."
              ]
            }
          ]
        }
      ]
    },
    {
      "slug": "project-03",
      "title": "JavaScript 기반 AI 애니메이션 제작",
      "subtitle": "코바바의 경제학",
      "summary": "HTML·SVG·JavaScript로 구현한 경제 애니메이션. 기획·연출 기준·모션 검수·수정 담당.",
      "competency": "JavaScript 모션 제어 · 음성 시간표 · 프레임 렌더링",
      "tags": [],
      "articleLabel": "개인 프로젝트 · 유튜브 채널 《코바바의 경제학》",
      "card": {
        "type": "image",
        "src": "assets/media/cobava/cover-character-v2.jpg",
        "poster": null,
        "alt": "모자 쓴 코바바와 돼지 저금통을 크게 담은 장면",
        "position": "50% 50%"
      },
      "resume": [
        {
          "heading": "제작 목적",
          "body": [
            "경제 개념을 캐릭터의 행동과 상황 변화로 설명하는 《코바바의 경제학》. 대표 사례는 은행의 대출 손실과 예금 인출을 다룬 뱅크런 편."
          ]
        },
        {
          "heading": "담당 범위",
          "body": [
            "콘셉트·캐릭터 표현 기준·자료 및 대본 검토·음성 선택·모션 검수와 수정 요청·최종 편집 및 공개 판단."
          ]
        },
        {
          "heading": "구현 방식",
          "body": [
            "Codex로 조사·대본·확정 음성의 시간 정보 정리. Claude로 HTML·SVG·JavaScript 모션 소스 구현. 브라우저 프레임 렌더링과 Python·FFmpeg 음향 및 영상 처리."
          ]
        }
      ],
      "outcome": {
        "body": "은행의 대출 손실과 주민들의 예금 인출을 한 이야기로 구성. 돈의 이동·주민의 행동·카메라 전환으로 뱅크런의 발생 과정 설명.",
        "media": [
          {
            "type": "embed",
            "src": "https://www.youtube-nocookie.com/embed/qZXh8zDz-3Y",
            "aspect": "16/9",
            "alt": "《코바바의 경제학》 · 사람들이 한꺼번에 돈을 찾으면 은행은 어떻게 될까요?",
            "caption": "《코바바의 경제학》 · 사람들이 한꺼번에 돈을 찾으면 은행은 어떻게 될까요?"
          }
        ],
        "action": null,
        "note": "아래 기술 기록은 뱅크런 편(v006)의 실제 제작 소스와 수정 기록을 바탕으로 작성."
      },
      "sections": [
        {
          "type": "article",
          "heading": "확정 음성을 기준으로 장면과 코드를 연결",
          "parts": [
            {
              "body": [
                "뱅크런 편에서는 예금과 대출, 손실과 인출을 하나의 마을 안에서 일어나는 사건으로 구성했습니다. 설명에 맞는 행동을 먼저 정하고, 캐릭터·돈·은행·가게의 위치와 카메라 이동을 코드로 조절했습니다.",
                "제 역할은 설명할 내용과 캐릭터의 표현 기준을 정하고, 결과를 검토해 수정하는 일이었습니다. Codex는 자료 조사·대본 정리·확정 음성의 시간 정보 준비에, Claude는 모션 소스 구현과 수정에 활용했습니다. 아래 코드는 이 과정에서 사용한 실제 제작 파일의 일부입니다."
              ]
            },
            {
              "steps": [
                {
                  "title": "자료·대본",
                  "body": [
                    "경제 원리와 설명용 상황을 구분하고, 내레이션의 문장과 장면 목적을 확정."
                  ]
                },
                {
                  "title": "음성·시간표",
                  "body": [
                    "음성 후보를 직접 듣고 선택. 확정한 합본 음성의 문장·어절 시간을 모션 제작 기준으로 전달."
                  ]
                },
                {
                  "title": "모션·검수",
                  "body": [
                    "Claude로 SVG 장면과 JavaScript 모션 구현. 동작·접촉·장면 연결을 확인하고 수정 요청."
                  ]
                },
                {
                  "title": "렌더·믹싱",
                  "body": [
                    "브라우저 화면을 프레임 단위로 출력. 내레이션·효과음·BGM을 별도 트랙으로 조절한 뒤 영상과 결합."
                  ]
                }
              ],
              "body": []
            }
          ]
        },
        {
          "type": "article",
          "heading": "문장·어절 시간표로 동작 시점을 지정",
          "parts": [
            {
              "body": [
                "모션은 임의의 초 단위 값만으로 배치하지 않고, 확정 음성의 시간표를 참조하도록 구성했습니다. times.js의 S는 문장별 시작·종료, WD는 해당 문장 안의 어절별 시작·종료를 담습니다. 이 파일의 기준 음성 길이는 약 266.322초이며, 아웃트로를 포함한 영상 길이와는 구분합니다.",
                "w(id, k)는 문장 안 k번째 어절의 시작 시점, we(id, k)는 종료 시점을 반환합니다. 장면 코드에서는 이 값에 짧은 선행·지연 시간을 더해, 설명 직전에 사물이 등장하거나 어절이 끝날 때 반응이 마무리되도록 배치했습니다."
              ],
              "codeBlocks": [
                {
                  "title": "문장·어절 시간 데이터",
                  "source": "v006/times.js · 실제 값 일부",
                  "content": "const S = {\n  \"1\": [0.26, 2.34],\n  \"2\": [3.46, 6.16],\n  \"3\": [7.34, 9.58]\n};\nconst WD = {\n  \"1\": [[0.26, 0.52], [0.52, 1.36],\n        [1.36, 1.80], [1.80, 2.34]]\n};",
                  "note": "전체 시간표에서 앞부분만 발췌하고 줄바꿈을 정리했습니다."
                },
                {
                  "title": "어절 시간 조회 함수",
                  "source": "v006/times.js",
                  "content": "export const w = (id, k = 0) => {\n  const L = WD[String(id)];\n  return L[(k + L.length) % L.length][0];\n};\nexport const we = (id, k = -1) => {\n  const L = WD[String(id)];\n  return L[(k + L.length) % L.length][1];\n};",
                  "note": "실제 제작 코드에서 발췌하고 읽기 쉽게 줄바꿈을 정리했습니다."
                },
                {
                  "title": "실제 장면에서 시간표를 참조하는 방식",
                  "source": "v006/scene.js · 장면 코드 일부",
                  "content": "      popIn(Rg, w(12, 6), 1e9, g => { bankIcon6(E('g', { transform: 'translate(0 -36) scale(0.6)' }, g), 6); });\n      popIn(Rg, w(12, 8), 1e9, g => { for (const x of [-26, 26]) slotRing(E('g', { transform: `translate(${x} 58)` }, g), 19, 5); }, { jel: [63.0] });\n      cue(w(12, 6), 'pop_small', OIW); cue(w(12, 8), 'pop_small', OIW); cue(63.0, 'jelly_small', OIW);"
                }
              ]
            },
            {
              "body": [
                "위 장면은 같은 문장 안에서도 서로 다른 어절에 은행 아이콘과 동전 투입구를 등장시키고, 같은 시점에 효과음 큐를 등록합니다. 화면 동작과 소리가 하나의 시간 기준을 참조하는 구조입니다."
              ]
            }
          ]
        },
        {
          "type": "article",
          "heading": "캐릭터의 움직임을 함수로 분리해 조절",
          "parts": [
            {
              "body": [
                "캐릭터는 기본 외형을 유지한 채 몸 전체의 눌림과 늘어남, 이동과 시선, 모자의 시간차로 반응하도록 했습니다. 모션 키트의 pose(spec, t)는 장면 명세와 현재 시각을 받아 위치·크기·회전 상태를 계산합니다.",
                "점프 높이는 사인 곡선으로 계산하고, 착지에는 가로·세로 배율을 반대로 적용해 눌림을 만듭니다. 캐릭터의 이동 거리와 횟수, 착지 시점을 바꿔도 같은 동작 함수를 재사용할 수 있습니다."
              ],
              "codeBlocks": [
                {
                  "title": "점프·스쿼시·스트레치",
                  "source": "v006/kit.js:8–10",
                  "content": "export const hop = (t, t0, d, h) => (\n  t < t0 || t > t0 + d\n    ? 0 : -h * Math.sin(Math.PI * (t - t0) / d)\n);\nexport function squash(st, t, tl, a, b = a * 0.6) {\n  const k = bell(t, tl - 0.06, 0.26);\n  st.sy *= 1 - a * k;\n  st.sx *= 1 + b * k;\n}\nexport function stretch(st, t, t0, d, a) {\n  if (t <= t0 || t >= t0 + d) return;\n  const k = Math.sin(Math.PI * (t - t0) / d);\n  st.sy *= 1 + a * k;\n  st.sx *= 1 - 0.6 * a * k;\n}",
                  "note": "실제 제작 코드에서 발췌하고 읽기 쉽게 줄바꿈을 정리했습니다."
                },
                {
                  "title": "포즈 명세에서 이동과 점프를 계산",
                  "source": "v006/kit.js:35–47 · pose 함수 내부 발췌",
                  "content": "  for (const [t0, t1, x1, n = 2, h = 46, y1 = null] of spec.moves || []) {\n    if (t < t0) break;\n    if (t >= t1) { x = x1; if (y1 !== null) y = y1; if (n > 0) squash(st, t, t1, 0.16); continue; }\n    const p = ease.inOutSine(prog(t, t0, t1));\n    x = lerp(x, x1, p); if (y1 !== null) y = lerp(y, y1, p);\n    if (n > 0) {\n      const hd = (t1 - t0) / n;\n      squash(st, t, t0 + 0.04, 0.1);\n      for (let k = 0; k < n; k++) { hy += hop(t, t0 + k * hd, hd, h); stretch(st, t, t0 + k * hd + 0.02, hd * 0.75, 0.12); squash(st, t, t0 + (k + 1) * hd, 0.16); }\n    }\n    break;\n  }\n  st.x = x; st.y = y + hy;"
                }
              ]
            },
            {
              "body": [
                "모자는 몸과 동시에 움직이지 않도록 별도로 계산했습니다. followOf는 현재보다 0.07초 이전을 중심으로 두 시점의 몸 위치를 읽고, 그 차이로 수직 이동과 회전의 보정값을 구합니다. 계산값에는 상한과 하한을 두어 과도한 흔들림을 제한합니다."
              ],
              "codeBlocks": [
                {
                  "title": "몸을 뒤따르는 모자 움직임",
                  "source": "v006/kit.js:75–78",
                  "content": "export function followOf(fn, t, lag = 0.07, k = 1) {\n  const h = 1 / 60;\n  const a = fn(t - lag - h), b = fn(t - lag + h);\n  return {\n    hatDy: clamp(-0.06 * (b.y - a.y) / (2 * h), -34, 8) * k,\n    hatRot: clamp(-0.03 * (b.x - a.x) / (2 * h), -10, 10) * k\n  };\n}",
                  "note": "실제 제작 코드에서 발췌하고 읽기 쉽게 줄바꿈을 정리했습니다."
                }
              ]
            },
            {
              "body": [
                "검수에서는 동작의 양보다 설명이 전달되는지를 우선했습니다. 물건을 주고받는 방향과 접촉, 캐릭터의 크기와 앞뒤 관계, 카메라 전환 뒤의 시선이 이어지는지를 확인했습니다."
              ],
              "media": [
                {
                  "type": "image",
                  "src": "assets/media/cobava/scene-035.jpg",
                  "aspect": "16/9",
                  "alt": "코바바와 은행을 크게 배치한 실제 완성 영상 장면",
                  "caption": "완성 영상 00:35 · 설명하는 인물과 공간을 크게 배치"
                },
                {
                  "type": "image",
                  "src": "assets/media/cobava/scene-150.jpg",
                  "aspect": "16/9",
                  "alt": "은행 앞에 인물들이 대기하는 실제 완성 영상 장면",
                  "caption": "완성 영상 02:30 · 인물의 크기와 앞뒤 관계를 확인한 장면"
                }
              ]
            }
          ]
        },
        {
          "type": "article",
          "heading": "카메라와 장면 전환도 같은 시간축에서 제어",
          "parts": [
            {
              "body": [
                "은행과 가게가 같은 마을 안에 있다는 관계를 유지하려고, 카메라가 이동할 때 장면의 좌표와 인물의 동선을 함께 검토했습니다. 카메라 함수는 1920×1080 무대의 중심을 기준으로 확대율과 바라볼 좌표를 SVG transform에 적용합니다.",
                "camKeys는 각 전환 구간의 진행률을 사인 가감속으로 계산합니다. 장면별 목표 좌표를 보간해 카메라가 순간적으로 튀지 않도록 했습니다."
              ],
              "codeBlocks": [
                {
                  "title": "카메라 좌표와 키 구간 보간",
                  "source": "v006/kit.js:11–16",
                  "content": "export function camera(el, z, cx, cy) {\n  tf(el, `translate(960 540) scale(${z}) translate(${-cx} ${-cy})`);\n}\nexport function camKeys(t, start, keys) {\n  let [z, cx, cy] = start;\n  for (const [a, b, z1, x1, y1] of keys) {\n    const p = sm(t, a, b);\n    z = lerp(z, z1, p);\n    cx = lerp(cx, x1, p);\n    cy = lerp(cy, y1, p);\n  }\n  return [z, cx, cy];\n}",
                  "note": "실제 제작 코드에서 발췌하고 읽기 쉽게 줄바꿈을 정리했습니다."
                }
              ]
            },
            {
              "body": [
                "수정 기록에서는 주민이 화면에 갑자기 나타나는 부분을 화면 밖에서 걸어 들어오도록 바꾸고, 이동 중 과도한 줌을 줄였습니다. 원형 마스크 전환이 필요한 구간은 화면이 닫힌 순간에 다음 장면으로 바꿔 이전 장면이 비치지 않게 조정했습니다."
              ],
              "codeBlocks": [
                {
                  "title": "전환이 닫힌 순간에 카메라 변경",
                  "source": "v006/scene.js · IRIS·ISW·J 정의 발췌",
                  "content": "const IRIS = [\n  [27.6, 28.55, 0.6, 0.75],\n  [83.3, 84.25, 0.6, 0.75]\n];\nconst ISW = IRIS.map(([a, b, dc]) =>\n  +((a + dc + b) / 2).toFixed(3)\n);\nconst J = (i, v) => K(ISW[i] - 0.01, ISW[i], v);",
                  "note": "실제 제작 코드에서 발췌하고 읽기 쉽게 줄바꿈을 정리했습니다."
                }
              ]
            }
          ]
        },
        {
          "type": "article",
          "heading": "브라우저 장면을 프레임 단위로 렌더링",
          "parts": [
            {
              "body": [
                "HTML의 SVG 무대에 장면을 초기화한 뒤, renderFrame(t)에 원하는 시각을 전달해 해당 프레임을 그리는 구조입니다. 재생 화면을 실시간으로 녹화하는 대신 f번째 프레임에 f/FPS초를 넣어 브라우저 화면을 캡처합니다.",
                "렌더러는 검토용 1280×720·30fps와 최종용 1920×1080·60fps 설정을 구분합니다. 구간을 여러 브라우저 작업으로 나눠 병렬로 캡처하고, 프레임 이미지를 FFmpeg에 전달한 뒤 시간 순서대로 연결합니다. 아래는 렌더러의 핵심 흐름입니다."
              ],
              "codeBlocks": [
                {
                  "title": "프레임 시각을 지정해 화면 캡처",
                  "source": "v006/render.mjs · 발췌, 줄바꿈 정리",
                  "content": "const shot = async (page, t) => {\n  await page.evaluate(t => window.renderFrame(t), t);\n  return page.screenshot({\n    type: MODE === 'final' ? 'png' : 'jpeg',\n    quality: MODE === 'final' ? undefined : 88\n  });\n};\n\nfor (let f = a; f < b; f++) {\n  const buf = await shot(page, f / FPS);\n  if (!ff.stdin.write(buf)) {\n    await new Promise(r => ff.stdin.once('drain', r));\n  }\n}",
                  "note": "실제 반복문 중 진행률 출력 부분은 생략했습니다."
                },
                {
                  "title": "구간 결합 후 시간축·출력 포맷 지정",
                  "source": "v006/render.mjs · 실제 출력 옵션 일부",
                  "content": "'-vf', `setpts=N/(${FPS}*TB),format=yuv420p`,\n'-r', String(FPS), '-c:v', 'libx264',\n'-colorspace', 'bt709',\n'-color_primaries', 'bt709',\n'-color_trc', 'bt709',\n'-g', String(FPS * 2),\n'-an', '-movflags', '+faststart' "
                }
              ]
            }
          ]
        },
        {
          "type": "article",
          "heading": "내레이션·효과음·음악을 분리해 믹싱",
          "parts": [
            {
              "body": [
                "무음 모션의 동작과 장면 연결을 확인한 뒤 음향을 결합했습니다. 효과음은 장면 코드에서 시각·종류·가로 위치를 가진 큐로 등록해, 화면 속 동작과 같은 시간축에서 관리합니다.",
                "내레이션과 효과음, BGM은 별도 트랙으로 유지했습니다. 이미 음량을 조정한 확정 내레이션에 다시 증폭을 적용하지 않고, 믹싱 유틸에서는 세 트랙을 더한 합에만 감쇠 리미터를 적용합니다."
              ],
              "codeBlocks": [
                {
                  "title": "장면 코드의 효과음 큐",
                  "source": "v006/scene.js:49–50",
                  "content": "const CUES = [];\nfunction cue(t, kind, x = null, extra = {}) {\n  if (t >= 0 && t < END) CUES.push({ t, kind, x, ...extra });\n}",
                  "note": "실제 제작 코드에서 발췌하고 읽기 쉽게 줄바꿈을 정리했습니다."
                },
                {
                  "title": "트랙 합산과 리미터 처리",
                  "source": "tools/mix_preview.py · 공통 믹싱 유틸 일부",
                  "content": "n, nsr = rd(NARR)\nn = resample_poly(n, 160, 147, axis=0) if nsr == 44100 else n\nn = fit(n)\ns, _ = rd(SFX)\ns = fit(s)\nb = fit(rd(BGM)[0]) if BGM else 0 * s\nmix, gr = limiter(n + s + b)",
                  "note": "중간 상태 출력용 변수는 생략하고 줄바꿈을 정리했습니다."
                }
              ]
            },
            {
              "body": [
                "믹싱 출력은 48kHz·24bit 스테레오입니다. 리미터는 피크 기준 −1dBFS, 선행 확인 5ms, 복귀 80ms 설정으로 합산 피크를 제한합니다. 이는 합산 피크를 제한하는 설정이며, 음량 전체를 나타내는 LUFS 목표값은 아닙니다.",
                "수정 기록에서는 짧은 시간에 같은 효과음이 겹치며 피크가 커지는 구간도 따로 확인했습니다. 큐의 중복을 조절한 뒤 다시 들어 보고, 대사와 동작을 가리는 소리가 없는지 최종 판단했습니다."
              ]
            }
          ]
        },
        {
          "type": "article",
          "heading": "수정 이유를 남겨 다음 제작에 활용",
          "parts": [
            {
              "body": [
                "검수 의견은 “더 자연스럽게” 같은 표현만 남기지 않고, 시각·문제·수정 방향으로 나눴습니다. 예를 들어 주민의 갑작스러운 등장, 카메라 이동 중 바닥선의 변화, 마스크가 닫히기 전에 바뀌는 장면은 각각 등장 동선·좌표·전환 시점의 문제로 구분했습니다.",
                "저는 설명과 연출의 목표를 정하고 결과를 판단했으며, Claude로 구현한 코드를 바탕으로 그 판단을 실제 모션 수정에 연결했습니다. 시간표·장면 명세·동작 함수·렌더러를 나눠 관리해, 특정 장면을 고칠 때도 기준 음성과 다른 장면의 의도를 함께 확인할 수 있도록 했습니다."
              ]
            }
          ]
        }
      ]
    }
  ]
};
