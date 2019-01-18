# HyperLedger
---

## 1. 환경설정
---
### 1.1 Virtual Machine
- OS : Ubuntu 16. 04 (64bit)
- 메모리 : 6GB
- 디스크(VMDK) :  50GB 이상 


### 1.2 Ubuntu
- 비밀번호 설정
```shell
su password
```
### 1.3 Docker Install
- Docker를 사용하기위해 Docker Install
- docker.com 접속 -> Resource.Docs -> Get Docker -> Ubuntu

> 쉽게 사용하기위해 명령어를 적어두겠습니다.
```shell
sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key 
add -

sudo apt-key fingerprint 0EBFCD88

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

sudo apt update

sudo apt install docker-ce

sudo usermod -aG docker bcadmin
```

### 1.4 golang Install
- go, yaml 파일을 사용하기위해 golang install
> golang.com 접속 -> Download Go -> Linux (save as)
> 쉽게 사용하기 위해 명령어를 적어두겠습니다.
```shell
tar -zxvf go1.11.4.linux-amd64.tar.gz -C /usr/local

nano .profile

제일 밑단에 추가
GOROOT=/usr/local/go
GOPATH=$HOME/gowork
PATH=$PATH:$GOROOT/bin:$GOPATH/bin

source .profile

mkdir gowork
```
### 1.5 Node.js Install
- nodejs 사용을 위한 install
> nodejs.org 접속 -> Download -> installing node.js via ~ -> Debian and 
Ubuntu ~ -> FreeBSD 위 Official Node.js link ->Node.js 8.x -> Using 
Ubuntu

> 쉽게 사용하기위해 명령어를 적어두겠습니다.
```shell
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```
### 1.5 Visual Studio Code install
- 파일 내 코드 변경을 쉽게하기위해 Visual Code install
> code.visualstudio.com 접속 -> deb download


### 1.6 Hyper Ledger install
> hyperledger-fabric.readthedocs.io 접속 -> getting started -> install 
sample,Binaries ~
> 
```shell
curl -sSL http://bit.ly/2ysbOFE | bash -s 1.3.0 1.3.0 0.4.13
```
