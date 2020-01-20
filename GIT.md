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

   

