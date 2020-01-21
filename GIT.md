# GIT 

## branch

1. branch 생성하기

   `git branch <사용할 이름>`

2. branch 를 사용한다고 정의하기

   `git checkout <위에서 정의한 이름>`

3.  1번과 2번을 한꺼번에 실행하기

   `git checkout -b <사용할 이름>`

4. 브랜치 병합하기

   ![image-20200107095308390](C:\Users\multicampus\AppData\Roaming\Typora\typora-user-images\image-20200107095308390.png)

   - HEAD가 현재 브랜치에 있다. master로 옮겨야함
     - `git checkout master`   => master로 옮기기
     - `git merge <브랜치 이름>`

5. 브랜치 삭제하기

   - 브랜치를 병합했다면 사용한 브랜치를 삭제해준다.
   - `git branch -d <브랜치 이름>`

   

### stash

- 커밋하지 않은 변경 내용이나 새롭게 추가한 파일이 인덱스와 작업 트리에 남아

  있는 채로 다른 브랜치로 전환( checkout ) 하면, 그 변경 내용은 기존 브랜치가 아닌 전환된 

  브랜치에서 커밋할 수 있다.

- 단 , commit 가능한 변경 내용 중에 전환된 브랜치에서도 한 차례 변경이 되어 있는 경우에는

  checkout에 실패할 수 있다. 이 경우 변경내용을 임시 저장할 수 있는 명령어인

  `stash`  를 사용하여 다른 곳에 저장하여 충돌을 피하게 한 뒤 checkout을 해야한다. 	