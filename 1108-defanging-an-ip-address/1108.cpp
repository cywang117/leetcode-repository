/**
 * 1108. Defanging an IP Address
 * https://leetcode.com/problems/defanging-an-ip-address/
 * C++ solution
 */

class Solution {
public:
  string defangIPaddr(string address) {
    string defanged = "";
    for (int i = 0; i < address.length(); i++) {
      address[i] == '.' ? defanged += "[.]" : defanged += address[i];
    }
    return defanged;
  }
};
