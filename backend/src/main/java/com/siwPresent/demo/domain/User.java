package com.siwPresent.demo.domain;

public class User {
    private String id;
    
    private String username;

    private String password;

    private String profilePic;

    private Integer roleID;

    private Integer sex;

    private String phone;

    private String email;

    public String getId(){
        return id;
    }

    public void setId(String id){
        this.id = id;
    }

    public String getUsername(){
        return username;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String getProfilePic(){
        return profilePic;
    }

    public void setProfilePic(String profilePic){
        this.profilePic = profilePic;
    }

    public Integer getRoleId(){
        return roleID;
    }

    public void setRoleId(Integer roleID){
        this.roleID = roleID;
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
