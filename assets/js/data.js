/* 최종 지원서와 실제 제작 자료를 바탕으로 구성한 포트폴리오 */
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
      "title": "맹종",
      "subtitle": "웹툰 기반 AI 애니메이션",
      "summary": "약 5분의 공포 애니메이션을 기획부터 이미지·영상·음향 생성, 편집까지 직접 제작했습니다.",
      "competency": "원작 이미지 가공 · 동작 제어 · 사운드 연출",
      "tags": [
        "원작 보존",
        "모션 지시",
        "음향 연출"
      ],
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
            "네이버웹툰 《맹종》 1화와 2화 초반부를 약 5분의 세로형 애니메이션으로 제작했습니다. 원작의 이야기를 영상에 맞게 구성하고, 기획부터 최종 편집·믹싱까지 전 과정을 맡았습니다."
          ]
        },
        {
          "heading": "연출 방향",
          "body": [
            "원작에서 독자가 스크롤로 조절하던 호흡을 정지 화면, 시선 변화, 암전과 소리로 옮겼습니다. 장면에 필요한 움직임을 먼저 정하고, 생성 영상과 편집을 함께 사용했습니다."
          ]
        },
        {
          "heading": "사용 도구",
          "body": [
            "Photoshop·Firefly, ChatGPT Images, Kling 2.6·3.0 Omni, Blender, ElevenLabs, Premiere Pro를 사용했습니다."
          ]
        }
      ],
      "outcome": {
        "body": "원작 이미지 193장을 가공하고, 최종 편집에 사용할 I2V 영상 소스 108개와 오디오 164개를 구성했습니다. 오디오에는 직접 선별한 환경음과 폴리도 포함됩니다.",
        "media": [
          {
            "type": "embed",
            "src": "https://www.youtube-nocookie.com/embed/fxLTM8oc8qY",
            "aspect": "9/16",
            "alt": "《맹종》 1~2화 · AI 애니메이션 완성본",
            "caption": "《맹종》 1~2화 · AI 애니메이션 완성본"
          }
        ],
        "action": {
          "url": "https://www.youtube.com/watch?v=fxLTM8oc8qY",
          "label": "YouTube에서 완성 영상 보기"
        },
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
      "title": "점괘보는 공녀님",
      "subtitle": "웹툰 숏애니 제작·합성",
      "summary": "원작의 그림체를 유지하며 대화 장면을 합성하고, 에피소드와 홍보 목적에 맞춰 편집했습니다.",
      "competency": "첫 프레임 제작 · 화자별 합성 · 목적별 편집",
      "tags": [
        "첫 프레임",
        "화자 합성",
        "목적별 편집"
      ],
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
            "카카오페이지 인턴으로 웹툰 영상화와 숏애니 제작 에이전트 구축 프로젝트에 참여했습니다. 《점괘보는 공녀님》은 원작의 인물과 그림체를 유지하며 이미지·영상 생성과 편집·합성을 연결한 제작 사례입니다."
          ]
        },
        {
          "heading": "담당 업무",
          "body": [
            "원작 이미지 가공, 첫 프레임 제작, 영상·음향 생성, 화자별 합성과 최종 편집을 수행했습니다. 직접 제작하며 모델 선택과 작업 순서를 기록하고, 에이전트가 수행할 수 있는 공정을 검토했습니다."
          ]
        },
        {
          "heading": "전체 프로젝트 범위",
          "body": [
            "참여한 전체 프로젝트에서 에피소드형 15편과 마케팅용 12편, 총 27편을 혼자 내부 테스트용으로 완성했습니다. 이 페이지에는 《점괘보는 공녀님》의 대표 제작 사례를 담았습니다."
          ]
        }
      ],
      "outcome": {
        "body": "9화의 이야기를 따라갈 수 있도록 구성한 에피소드형 완성본입니다. 아래 제작 사례에서는 첫 프레임 준비, 두 인물의 대화 합성, 티저형 편집을 보여드립니다.",
        "media": [
          {
            "type": "embed",
            "src": "https://www.youtube-nocookie.com/embed/PwsN7nyzPyk",
            "aspect": "9/16",
            "alt": "《점괘보는 공녀님》 9화 · 에피소드형 완성본",
            "caption": "《점괘보는 공녀님》 9화 · 에피소드형 완성본"
          }
        ],
        "action": {
          "url": "https://www.youtube.com/watch?v=PwsN7nyzPyk",
          "label": "YouTube에서 완성 영상 보기"
        },
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
                  "src": "assets/media/gongnyeo/speaker-male.png",
                  "aspect": "9/16",
                  "alt": "남성 발화용 생성 소스",
                  "caption": "남성 발화용 생성 소스"
                },
                {
                  "type": "image",
                  "src": "assets/media/gongnyeo/speaker-female.png",
                  "aspect": "9/16",
                  "alt": "여성 발화용 생성 소스",
                  "caption": "여성 발화용 생성 소스"
                }
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
      "title": "코바바",
      "subtitle": "캐릭터 모션그래픽·콘텐츠 제작",
      "summary": "경제 개념을 캐릭터의 행동과 상황 변화로 설명하는 영상 시리즈를 기획하고 제작했습니다.",
      "competency": "캐릭터 연출 · AI 도구 활용 · 시리즈 제작",
      "tags": [
        "캐릭터 연기",
        "모션그래픽",
        "제작 과정 관리"
      ],
      "articleLabel": "개인 프로젝트 · 유튜브 채널 《코바바의 경제학》",
      "card": {
        "type": "image",
        "src": "assets/media/cobava/cover-character.jpg",
        "poster": null,
        "alt": "코바바 · 글자 없이 캐릭터를 중심으로 구성한 실제 영상 장면",
        "position": "50% 50%"
      },
      "resume": [
        {
          "heading": "제작 목적",
          "body": [
            "경제 개념을 처음 접하는 시청자가 원리를 이해할 수 있도록, 캐릭터의 행동과 상황 변화로 설명하는 《코바바의 경제학》을 제작하고 있습니다."
          ]
        },
        {
          "heading": "담당 업무",
          "body": [
            "채널의 콘셉트와 캐릭터 표현 기준을 정하고, 자료 조사·대본 검토·음성 선택·모션 수정 요청·최종 편집과 공개 여부를 직접 판단합니다."
          ]
        },
        {
          "heading": "제작 도구와 방식",
          "body": [
            "Codex로 자료와 대본을 정리하고, ElevenLabs로 내레이션을 생성합니다. 확정한 음성과 시간 정보를 Claude에 전달해 HTML·SVG·JavaScript 기반 모션그래픽 소스를 만들고, 브라우저에서 렌더링해 영상으로 출력합니다. 장면의 동작과 연결을 검토한 뒤 수정합니다."
          ]
        }
      ],
      "outcome": {
        "body": "대표 영상은 코바바가 운영하는 은행에서 대출 손실과 예금 인출이 겹치며 뱅크런이 발생하는 과정을 설명합니다. 돈의 이동과 주민들의 행동을 따라가며 은행의 위기를 이해하도록 구성했습니다.",
        "media": [
          {
            "type": "embed",
            "src": "https://www.youtube-nocookie.com/embed/qZXh8zDz-3Y",
            "aspect": "16/9",
            "alt": "《코바바의 경제학》 · 사람들이 한꺼번에 돈을 찾으면 은행은 어떻게 될까요?",
            "caption": "《코바바의 경제학》 · 사람들이 한꺼번에 돈을 찾으면 은행은 어떻게 될까요?"
          }
        ],
        "action": {
          "url": "https://www.youtube.com/watch?v=qZXh8zDz-3Y",
          "label": "YouTube에서 대표 영상 보기"
        },
        "note": "캐릭터 모션그래픽과 AI 내레이션을 활용해 제작한 공개 영상입니다."
      },
      "sections": [
        {
          "type": "article",
          "heading": "캐릭터의 행동으로 경제 원리 설명",
          "parts": [
            {
              "body": [
                "뱅크런 영상에서는 예금과 대출이 은행으로 모이고, 대출 손실과 주민들의 인출이 이어지는 상황을 하나의 이야기로 구성했습니다. 현재 설명하는 인물과 돈의 이동을 크게 보여주고, 앞 장면의 선택이 다음 장면의 결과로 이어지도록 했습니다.",
                "내레이션을 먼저 확정하고 문장별 시간 정보를 정리해 모션 제작의 기준으로 삼았습니다. 설명 중에는 필요한 동작을 보여주고, 문장 사이의 쉼에는 관찰과 반응을 배분했습니다."
              ]
            }
          ]
        },
        {
          "type": "article",
          "heading": "캐릭터의 움직임과 장면 연결을 기준으로 검수",
          "parts": [
            {
              "body": [
                "코바바는 기본 외형을 유지한 채 몸 전체로 감정을 표현하도록 했습니다. 몸의 눌림과 늘어남, 모자가 뒤따라 움직이는 시간차처럼 애니메이션의 특성을 활용하되, 손이나 입 등 기존에 없던 부속이 생기지 않도록 기준을 정했습니다.",
                "물건을 주고받는 장면에서는 출발점과 도착점, 주고받는 방향을 확인합니다. 확대와 화면 전환에서도 인물의 크기와 시선, 앞뒤 관계가 이어지는지 검토하고, 캐릭터가 겹치거나 이전 장면이 비치는 부분은 수정합니다."
              ]
            },
            {
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
          "heading": "확정한 자료와 음성을 다음 제작 단계로 연결",
          "parts": [
            {
              "steps": [
                {
                  "title": "자료 조사와 대본 확정",
                  "body": [
                    "경제 원리와 설명용 상황을 구분해 자료를 정리하고, AI로 작성한 초안을 검토해 표현과 이야기의 흐름을 수정합니다."
                  ]
                },
                {
                  "title": "내레이션 생성과 선택",
                  "body": [
                    "음성 후보를 직접 듣고 발음·말투·속도를 비교합니다. 선택한 음성의 쉼과 음량을 확인한 뒤 시간 정보를 정리합니다."
                  ]
                },
                {
                  "title": "모션 제작과 수정",
                  "body": [
                    "대본·확정 음성·시간 정보·캐릭터 기준을 Claude에 전달합니다. 생성된 모션의 동작과 장면 연결을 검토하고 수정합니다."
                  ]
                },
                {
                  "title": "음향·영상 마감",
                  "body": [
                    "대사가 음악과 효과음에 묻히지 않도록 조절하고, 자막·썸네일·제목 등 공개에 필요한 자료를 함께 준비합니다."
                  ]
                }
              ]
            },
            {
              "body": [
                "각 단계의 기준 자료와 수정 이유를 남겨, 다음 영상에서도 같은 캐릭터와 제작 기준을 이어갈 수 있도록 관리하고 있습니다."
              ]
            }
          ]
        }
      ]
    }
  ]
};
