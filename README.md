# 영화예매프로젝트
> 코드초보커뮤니티 SpringAir 스터디에서 진행되는 Spring boot, JPA 기반의 웹 프로젝트 


## Development Guidelines
> Webapp Required : node5.x 이상

### Commit Rules
> 가능한 커밋마다 의미를 부여했고 도메인에 종속 (domain) 인 경우 scope 추가  
> feat: 기능 추가  
> fix: 오류수정  
> docs: 문서파일 수정  
> perf: 성능개선코드  
> refactor: 리팩토링  
> test: 누락된 테스트코드  
> chore: 잡다변경 ( 포멧팅, 설정변경 등)  
```
# api 기능 추가
feat(show): 상영정보등록
~blank~
 - 상영 정보를 등록한다.
 - 상영 스케쥴을 등록한다.
~blank~
closes #23
```


### 프로젝트 설정하
git clone https://github.com/codechobostudy/movie-webapp
cd movie-webapp && npm install


### 프로젝트 실행하기(개발모드)
```
# Web app 서버
gulp
```