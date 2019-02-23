// 사용자 이름 눌렀을 때 댓글 로딩
document.querySelectorAll('#user-list tr').forEach(function (el) {
  el.addEventListener('click', function () {
    var id = el.querySelector('td').textContent;
    getComment(id);
  });
});
// 사용자 로딩
function getUser() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      var users = JSON.parse(xhr.responseText);
      console.log(users);
      var tbody = document.querySelector('#user-list tbody');
      tbody.innerHTML = '';
      users.map(function (user) {
        var row = document.createElement('tr');
        row.addEventListener('click', function () {
          getComment(user._id);
        });
        var td = document.createElement('td');
        td.textContent = user._id;
        row.appendChild(td);
        td = document.createElement('td');
        td.textContent = user.address;
        row.appendChild(td);
        td = document.createElement('td');
        td.textContent = user.TokenId;
        row.appendChild(td);
        td = document.createElement('td');
        td.textContent = user.Property;
        row.appendChild(td);
        td = document.createElement('td');
        td.textContent = user.Icx;
        row.appendChild(td);
        tbody.appendChild(row);
      });
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open('GET', '/users');
  xhr.send();
}

var a = document.getElementById('user-form')
a. addEventListener('submit', function (e) { e.preventDefault();
  
  var address = e.target.address.value;
  var TokenId = e.target.TokenId.value;
  var Property = e.target.Property.value;
  var Icx = e.target.Icx.value;

  console.log(address);
  console.log(TokenId);
  console.log(Property);
  console.log(Icx);

  if (!address) {
    return alert ('Invaild address');
  }
  if (!TokenId) {
    return alert ('Invaild TokenId');
  }
  if (!Property) {
    return alert ('Invaild Property');
  }
  if (!Icx) {
    return alert ('Wrong Icx');
  }

  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 201) {
      console.log(xhr.responseText);
      getUser();
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open('POST', '/users');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ address: address, TokenId: TokenId, Property: Property, Icx: Icx }));
  e.target.address.value = '';
  e.target.TokenId.value = '';
  e.target.Property.value = '';
  e.target.Icx.value = '';
});
