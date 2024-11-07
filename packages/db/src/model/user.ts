export interface UserModel {
  /**
   * 用户 id
   */
  id: string
  /**
   * 用户名
   */
  username: string
  /**
   * 密码
   */
  password: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 角色
   */
  role: Role
  /**
   * 创建时间
   */
  createTime: number
  /**
   * 更新时间
   */
  updateTime: number
}

export enum Role {
  USER,
  ADMIN,
}