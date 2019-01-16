# Ethereum Private Network 구축
---
> ####  Virtual Machine Ubuntu 18.04

## 1. Install Geth ( Go-Ethereum ) In Ubuntu

```shell
sudo apt-get install -y build-essential libgmp3-dev golang git tree
```


```shell
git clone https://github.com/ethereum/go-ethereum
```

#### clone 하고 나면 go-ethereum 폴더가 생긴다
```shell
cd go-ethereum
git checkout refs/tags/v1.8.12
```
> 1.8.12 버전을 사용하기위해 git checkout 사용
> 
```shell
make geth
./build/bin/geth versioln
sudo cp build/bin/geth/use/local/bin
```

## 2. genesis.json 생성
----
> /node 하위폴더에 생성
> 
 ```shell
 vi genesis.json
```

 ```shell
 {
"config":{
  "chainId":33,
  "homesteadBlock":0,
  "eip155Block":0,
  "eip158Block":0
},
"nonce":"0x0000000000000033",
"timestamp":"0x0",
"parentHash":"0x0000000000000000000000000000000000000000000000000000000000000000",
"gasLimit":"0x8000000",
"difficulty":"0x100",
"mixhash":"0x0000000000000000000000000000000000000000000000000000000000000000",
"coinbase":"0x3333333333333333333333333333333333333333",
"alloc":{}
}
 ```
 > 연결하고 싶은 pc와 같은 genesis.json을 사용해야된다
 
 ## 3. geth 실행
 ---
 ```shell
 ./geth --datadir ./node init genesis.json
 ```
 > 초기화를 시켜준다
 
 ```shell
 geth --networkid 000 --nodiscover --maxpeer 0 --datadir ./node console 
2>> ./node/error.log
 ```
 > --networkid 000 : 네트워크번호를 뜻하며 1~3을 제외한 번호를 
입력해주면된다
 > --nodiscover :  본인의 node를 다른사람들이 볼 수 없도록하는 옵션
 > --maxpeer 0 : 해당 네트워크에 들어올 수 있는 peer의 수를 정하는옵션 
(default = 25)

